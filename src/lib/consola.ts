/**
 * Los comandos de la consola del inicio.
 *
 * Todo lo que responde sale de `src/data/site.ts`, la misma fuente que pinta
 * las tarjetas y el stack, así que la consola no puede quedarse desfasada
 * respecto a la página. Aquí sólo se decide qué se escribe; las acciones con
 * efecto (tema, CV, limpiar) las devuelve y las ejecuta quien llama.
 */

export type Tono = 'acento' | 'tenue' | 'error';
/** `antes` y `resto` rodean al enlace en tenue: así sólo se subraya lo que se toca. */
export type Linea = {
	texto: string;
	tono?: Tono;
	href?: string;
	externo?: boolean;
	antes?: string;
	resto?: string;
};
export type Resultado = { lineas: Linea[]; accion?: 'limpiar' | 'tema' | 'cv' };

export type DatosConsola = {
	yo: { nombre: string; rol: string; lugar: string; email: string; whatsapp: string; whatsappHref: string; github: string };
	proyectos: {
		slug: string;
		titulo: string;
		tagline: string;
		estado: string;
		stack: string[];
		vivo?: string;
		repo?: string;
	}[];
	stack: { label: string; items: string[] }[];
	textos: {
		ayuda: Record<string, string>;
		noExiste: string;
		usoCat: string;
		sinProyecto: string;
		privado: string;
		verTarjeta: string;
		cvBajando: string;
		temaCambiado: string;
		sudo: string;
	};
};

/** Alias en español; lo que se ofrece en `help` son los nombres en inglés. */
const ALIAS: Record<string, string> = {
	ayuda: 'help',
	'?': 'help',
	quiensoy: 'whoami',
	proyectos: 'ls',
	ver: 'cat',
	contacto: 'contact',
	tema: 'theme',
	limpiar: 'clear',
	cls: 'clear',
};

export function ejecutar(entrada: string, d: DatosConsola): Resultado {
	const partes = entrada.trim().split(/\s+/);
	const crudo = (partes.shift() ?? '').toLowerCase();
	const orden = ALIAS[crudo] ?? crudo;
	const arg = partes.join(' ').toLowerCase().replace(/^~\/?(proyectos|projects)\//, '');
	const t = d.textos;

	if (!crudo) return { lineas: [] };

	switch (orden) {
		case 'help':
			return {
				lineas: Object.entries(t.ayuda).map(([nombre, que]) => ({
					texto: `${nombre.padEnd(9)} ${que}`,
				})),
			};

		case 'whoami':
			return {
				lineas: [
					{ texto: d.yo.nombre, tono: 'acento' },
					{ texto: d.yo.rol },
					{ texto: d.yo.lugar, tono: 'tenue' },
				],
			};

		case 'ls':
			return {
				lineas: d.proyectos.map((p) => ({
					texto: p.slug,
					href: `#proyecto-${p.slug}`,
					resto: `${' '.repeat(Math.max(1, 16 - p.slug.length))}${p.estado.toLowerCase()}`,
				})),
			};

		case 'cat': {
			if (!arg) return { lineas: [{ texto: t.usoCat, tono: 'tenue' }] };
			const p = d.proyectos.find((x) => x.slug === arg);
			if (!p) return { lineas: [{ texto: t.sinProyecto.replace('{slug}', arg), tono: 'error' }] };
			const lineas: Linea[] = [
				{ texto: p.titulo, tono: 'acento' },
				{ texto: p.tagline },
				{ texto: p.stack.join(' · '), tono: 'tenue' },
			];
			if (p.vivo) lineas.push({ texto: p.vivo.replace(/^https?:\/\//, ''), href: p.vivo, externo: true });
			if (p.repo) lineas.push({ texto: p.repo.replace(/^https?:\/\//, ''), href: p.repo, externo: true });
			if (!p.repo) lineas.push({ texto: t.privado, tono: 'tenue' });
			lineas.push({ texto: t.verTarjeta, href: `#proyecto-${p.slug}` });
			return { lineas };
		}

		case 'stack':
			return {
				lineas: d.stack.map((g) => ({ texto: `${g.label.padEnd(13)} ${g.items.join(' · ')}` })),
			};

		case 'contact':
			return {
				lineas: [
					{ antes: 'email     ', texto: d.yo.email, href: `mailto:${d.yo.email}` },
					{ antes: 'whatsapp  ', texto: d.yo.whatsapp, href: d.yo.whatsappHref, externo: true },
					{ antes: 'github    ', texto: d.yo.github.replace(/^https?:\/\//, ''), href: d.yo.github, externo: true },
				],
			};

		case 'cv':
			return { lineas: [{ texto: t.cvBajando, tono: 'acento' }], accion: 'cv' };

		case 'theme':
			return { lineas: [{ texto: t.temaCambiado, tono: 'tenue' }], accion: 'tema' };

		case 'clear':
			return { lineas: [], accion: 'limpiar' };

		// Guiño: no sale en `help`, pero está.
		case 'sudo':
			return { lineas: [{ texto: t.sudo, tono: 'tenue' }] };

		default:
			return { lineas: [{ texto: t.noExiste.replace('{cmd}', crudo), tono: 'error' }] };
	}
}

/** Completa con el tabulador cuando sólo hay una opción posible. */
export function completar(entrada: string, d: DatosConsola): string | null {
	const partes = entrada.split(/\s+/);
	const posibles =
		partes.length > 1 && ['cat', 'ver'].includes(partes[0].toLowerCase())
			? d.proyectos.map((p) => p.slug)
			: [...Object.keys(d.textos.ayuda), ...Object.keys(ALIAS)];

	const ultimo = partes[partes.length - 1].toLowerCase();
	if (!ultimo) return null;

	const candidatos = [...new Set(posibles)].filter((p) => p.startsWith(ultimo));
	if (candidatos.length !== 1) return null;

	partes[partes.length - 1] = candidatos[0];
	return partes.join(' ') + (partes.length === 1 && candidatos[0] === 'cat' ? ' ' : '');
}
