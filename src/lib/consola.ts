/**
 * Los comandos del terminal del inicio.
 *
 * Todo lo que responde sale de `src/data/site.ts` — la misma fuente que pinta
 * las tarjetas y el stack — así que la consola no puede quedarse desfasada
 * respecto a la página que la rodea. Aquí sólo se decide qué se escribe; las
 * acciones con efecto (cambiar el tema, bajar el CV, limpiar) las devuelve y
 * las ejecuta quien llama.
 */
import { altitudSolar, proximoCruce, horaEnHabana } from './sol';

export type Linea = { texto: string; tono?: 'acento' | 'tenue' | 'error' };
export type Resultado = { lineas: Linea[]; accion?: 'limpiar' | 'tema' | 'cv' };

export type DatosConsola = {
	locale: 'es' | 'en';
	yo: { nombre: string; rol: string; lugar: string; email: string; whatsapp: string; github: string };
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
	cv: string;
	textos: {
		pista: string;
		noExiste: string;
		ayuda: Record<string, string>;
		cvBajando: string;
		temaCambiado: string;
		usoCat: string;
		sinProyecto: string;
		privado: string;
		nada: string;
	};
};

/** Los comandos, con su alias en español. Lo que se ofrece en `help`. */
const ALIAS: Record<string, string> = {
	ayuda: 'help',
	quiensoy: 'whoami',
	proyectos: 'ls',
	ver: 'cat',
	contacto: 'contact',
	tema: 'theme',
	limpiar: 'clear',
	sol: 'sun',
};

export function ejecutar(entrada: string, datos: DatosConsola): Resultado {
	const partes = entrada.trim().split(/\s+/);
	const crudo = (partes.shift() ?? '').toLowerCase();
	const orden = ALIAS[crudo] ?? crudo;
	const argumento = partes.join(' ').toLowerCase();
	const { textos, locale } = datos;

	if (!crudo) return { lineas: [] };

	switch (orden) {
		case 'help':
			return {
				lineas: Object.entries(textos.ayuda).map(([nombre, que]) => ({
					texto: `  ${nombre.padEnd(10)} ${que}`,
				})),
			};

		case 'whoami':
			return {
				lineas: [
					{ texto: datos.yo.nombre, tono: 'acento' },
					{ texto: datos.yo.rol },
					{ texto: datos.yo.lugar, tono: 'tenue' },
				],
			};

		case 'ls':
			return {
				lineas: datos.proyectos.map((p) => ({
					texto: `  ${p.slug.padEnd(16)} ${p.estado.toLowerCase()}`,
				})),
			};

		case 'cat': {
			if (!argumento) {
				return {
					lineas: [
						{
							texto: textos.usoCat.replace(
								'{lista}',
								datos.proyectos
									.slice(0, 3)
									.map((p) => p.slug)
									.join(', ')
							),
							tono: 'tenue',
						},
					],
				};
			}

			const proyecto = datos.proyectos.find((p) => p.slug === argumento);
			if (!proyecto) {
				return {
					lineas: [{ texto: textos.sinProyecto.replace('{slug}', argumento), tono: 'error' }],
				};
			}

			return {
				lineas: [
					{ texto: proyecto.titulo, tono: 'acento' },
					{ texto: proyecto.tagline },
					{ texto: `  ${proyecto.stack.join(' · ')}`, tono: 'tenue' },
					{
						texto: `  ${[proyecto.vivo, proyecto.repo ?? textos.privado].filter(Boolean).join('  ')}`,
						tono: 'tenue',
					},
				],
			};
		}

		case 'stack':
			return {
				lineas: datos.stack.map((grupo) => ({
					texto: `  ${grupo.label.padEnd(13)} ${grupo.items.join(' · ')}`,
				})),
			};

		case 'sun': {
			const ahora = new Date();
			const altura = altitudSolar(ahora);
			const cruce = proximoCruce(ahora);
			const arriba = altura > -0.833;
			const cuando = cruce
				? ` · ${etiquetaCruce(cruce.amanece, locale)} ${horaEnHabana(cruce.fecha, locale)}`
				: '';
			return {
				lineas: [
					{
						texto: `${horaEnHabana(ahora, locale)} · ${Math.round(altura)}°${cuando}`,
						tono: arriba ? 'acento' : 'tenue',
					},
				],
			};
		}

		case 'contact':
			return {
				lineas: [
					{ texto: `  email     ${datos.yo.email}` },
					{ texto: `  whatsapp  ${datos.yo.whatsapp}` },
					{ texto: `  github    ${datos.yo.github}` },
				],
			};

		case 'cv':
			return {
				lineas: [{ texto: textos.cvBajando.replace('{archivo}', datos.cv), tono: 'acento' }],
				accion: 'cv',
			};

		case 'theme':
			return { lineas: [{ texto: textos.temaCambiado, tono: 'tenue' }], accion: 'tema' };

		case 'clear':
			return { lineas: [], accion: 'limpiar' };

		// Guiños: no salen en `help`, pero están.
		case 'sudo':
			return { lineas: [{ texto: textos.nada, tono: 'tenue' }] };

		case 'neofetch':
			return { lineas: neofetch(datos) };

		default:
			return { lineas: [{ texto: textos.noExiste.replace('{cmd}', crudo), tono: 'error' }] };
	}
}

function etiquetaCruce(amanece: boolean, locale: 'es' | 'en') {
	if (locale === 'en') return amanece ? 'sunrise' : 'sunset';
	return amanece ? 'amanece' : 'anochece';
}

/** El panal en pequeño, con los datos al lado. */
function neofetch(datos: DatosConsola): Linea[] {
	const es = datos.locale === 'es';
	const campo = (etiqueta: string, valor: string) => `${etiqueta.padEnd(10)}${valor}`;
	const info = [
		datos.yo.nombre,
		'—'.repeat(datos.yo.nombre.length),
		campo(es ? 'rol' : 'role', datos.yo.rol),
		campo(es ? 'lugar' : 'place', datos.yo.lugar),
		campo(es ? 'proyectos' : 'projects', String(datos.proyectos.length)),
		campo('stack', 'Astro · Tailwind · 0 KB'),
		campo('email', datos.yo.email),
	];
	const dibujo = ['  ⬡ ⬡ ⬡', ' ⬡ ⬡ ⬡ ⬡', '⬡ ⬡ ⬡ ⬡ ⬡', ' ⬡ ⬡ ⬡ ⬡', '  ⬡ ⬡ ⬡', '', ''];

	return dibujo.map((fila, i) => ({
		texto: `${fila.padEnd(11)} ${info[i] ?? ''}`.trimEnd(),
		tono: i < 5 ? 'acento' : undefined,
	}));
}

/** Para completar con el tabulador. */
export function completar(entrada: string, datos: DatosConsola): string | null {
	const partes = entrada.split(/\s+/);
	const posibles =
		partes.length > 1 && (partes[0] === 'cat' || partes[0] === 'ver')
			? datos.proyectos.map((p) => p.slug)
			: [...Object.keys(datos.textos.ayuda), ...Object.keys(ALIAS)];

	const ultimo = partes[partes.length - 1].toLowerCase();
	if (!ultimo) return null;

	const candidatos = [...new Set(posibles)].filter((p) => p.startsWith(ultimo));
	if (candidatos.length !== 1) return null;

	partes[partes.length - 1] = candidatos[0];
	return partes.join(' ');
}
