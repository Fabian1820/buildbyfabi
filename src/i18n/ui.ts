export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const UI = {
	es: {
		nav: { about: 'Sobre mí', stack: 'Stack', work: 'Proyectos', contact: 'Contacto', menu: 'Menú', primary: 'Principal' },
		hero: {
			role: 'Ingeniero Informático · Desarrollador Full-Stack',
			tagline: 'Construyo software de extremo a extremo — del modelo de datos al último pixel.',
			available: 'Disponible para proyectos freelance',
			ctaCv: 'Descargar CV',
			ctaContact: 'Hablemos',
		},
		about: {
			title: 'De la CUJAE a producción',
			p1: 'Soy ingeniero informático, graduado de la CUJAE en julio de 2026. Mi tesis fue un gemelo digital web para gestionar, predecir y monitorear una microrred fotovoltaica: en lugar de resolverlo para una sola instalación, lo diseñé alrededor de un conjunto de reglas configurables, de modo que pudiera integrarse con distintas APIs y adaptarse a escenarios reales muy diferentes entre sí.',
			p2html:
				'Desde hace un año trabajo en <a href="__SUNCAR__" target="_blank" rel="noopener noreferrer" class="font-medium text-accent-ink underline decoration-accent-ink/30 underline-offset-4 transition-colors hover:decoration-accent-ink">SunCar</a> como desarrollador y uno de los líderes del equipo, construyendo tanto su sitio corporativo como el sistema interno con el que la empresa opera cada día. Además trabajo como freelance en remoto: me interesan los proyectos donde pueda acompañar el producto de principio a fin, o sumarme en marcha y aportar justo donde el equipo necesita empuje para seguir avanzando.',
			p3: 'Mi terreno es React y Next.js en el frontend, FastAPI y MongoDB en el backend, y Claude Code como parte natural del flujo — creo que el desarrollo asistido por IA, bien usado, eleva el nivel del trabajo en vez de reemplazarlo. Más allá del stack, lo que más disfruto es levantar requisitos con el cliente, modelar la arquitectura antes de escribir la primera línea, romper mis propias implementaciones buscando por dónde fallan y cuidar la seguridad desde el diseño. Y trabajo mejor acompañado: prefiero discutir una decisión técnica con el equipo que acertarla solo.',
			age: 'años',
			basedIn: 'Desde',
			credentials: 'Credenciales',
			closeCredential: 'Cerrar',
		},
		stack: {
			title: 'Con lo que trabajo',
			subtitle: 'Lo que uso en proyectos reales, no una lista de todo lo que he tocado alguna vez.',
		},
		work: {
			title: 'Cosas que he construido',
			subtitle: 'Sistemas en producción, productos propios y trabajo académico.',
			viewLive: 'Ver en vivo',
			previewAlt: 'Vista previa de',
			noPreview: 'código privado · sin captura pública',
			privateCode: 'Código privado',
			showMore: 'Ver también',
			showLess: 'Ver menos',
			viewCode: 'Código',
			status: { live: 'En producción', wip: 'En desarrollo', oss: 'Código abierto', private: 'Privado', archived: 'Archivado' },
		},
		contact: {
			title: '¿Tienes algo en mente?',
			subtitle: 'Cuéntame tu idea o lo que necesitas resolver, y vemos juntos cómo llevarlo adelante.',
			emailLabel: 'Escríbeme',
			emailHint: 'La vía más directa para hablar de un proyecto.',
			whatsappLabel: 'WhatsApp',
			whatsappHint: 'Para algo rápido.',
			copy: 'Copiar',
			copied: 'Correo copiado',
			copyFailed: 'No se pudo copiar: el correo queda seleccionado',
			timezone: 'misma hora que Nueva York',
		},
		footer: {
			built: 'Construido con',
		},
		consola: {
			etiqueta: 'Consola: escribe help y pulsa Intro',
			pista: 'escribe help',
			ayuda: {
				help: 'esta lista',
				whoami: 'quién soy',
				ls: 'mis proyectos',
				cat: 'detalle de un proyecto: cat golazo',
				stack: 'con qué trabajo',
				contact: 'cómo hablar conmigo',
				cv: 'descargar mi CV',
				theme: 'cambiar claro / oscuro',
				clear: 'limpiar la pantalla',
			},
			noExiste: '{cmd}: comando no encontrado. Prueba help',
			usoCat: 'uso: cat <proyecto>  (prueba ls)',
			sinProyecto: 'cat: {slug}: no existe ese proyecto',
			privado: 'código privado',
			verTarjeta: '→ ver la tarjeta',
			cvBajando: 'descargando Fabian-Fernandez-CV.pdf…',
			temaCambiado: 'tema cambiado',
			sudo: 'buen intento. Aquí no hace falta: pregunta lo que quieras.',
		},
		theme: { toggle: 'Cambiar tema' },
		lang: { toggle: 'Cambiar idioma' },
		notFound: {
			title: 'Página no encontrada',
			message: 'La ruta que buscas no existe en este servidor.',
			back: 'Volver al inicio',
		},
	},
	en: {
		nav: { about: 'About', stack: 'Stack', work: 'Work', contact: 'Contact', menu: 'Menu', primary: 'Primary' },
		hero: {
			role: 'Software Engineer · Full-Stack Developer',
			tagline: 'I build software end to end — from the data model to the last pixel.',
			available: 'Available for freelance work',
			ctaCv: 'Download CV',
			ctaContact: 'Get in touch',
		},
		about: {
			title: 'From CUJAE to production',
			p1: 'I am a software engineer, graduated from CUJAE in July 2026. My thesis was a web digital twin to manage, forecast and monitor a photovoltaic microgrid: instead of solving it for a single installation, I designed it around a configurable rule set so it could integrate with different APIs and adapt to very different real-world scenarios.',
			p2html:
				'For the past year I have been working at <a href="__SUNCAR__" target="_blank" rel="noopener noreferrer" class="font-medium text-accent-ink underline decoration-accent-ink/30 underline-offset-4 transition-colors hover:decoration-accent-ink">SunCar</a> as a developer and one of the team leads, building both their corporate site and the internal system the company runs on every day. I also work as a remote freelancer: I am drawn to projects where I can follow the product from start to finish, or join one already in motion and push exactly where the team needs momentum.',
			p3: 'My ground is React and Next.js on the frontend, FastAPI and MongoDB on the backend, and Claude Code as a natural part of the workflow — I believe AI-assisted development, used well, raises the bar of the work rather than replacing it. Beyond the stack, what I enjoy most is gathering requirements with the client, modelling the architecture before writing the first line, breaking my own implementations to find where they fail, and building security in from the design stage. And I work better with company: I would rather debate a technical decision with the team than get it right alone.',
			age: 'years old',
			basedIn: 'Based in',
			credentials: 'Credentials',
			closeCredential: 'Close',
		},
		stack: {
			title: 'What I work with',
			subtitle: "What I use on real projects — not a list of everything I've ever touched.",
		},
		work: {
			title: 'Things I have built',
			subtitle: 'Production systems, my own products, and academic work.',
			viewLive: 'Live site',
			previewAlt: 'Preview of',
			noPreview: 'private code · no public screenshot',
			privateCode: 'Private code',
			showMore: 'Also see',
			showLess: 'See less',
			viewCode: 'Source',
			status: { live: 'In production', wip: 'In progress', oss: 'Open source', private: 'Private', archived: 'Archived' },
		},
		contact: {
			title: 'Got something in mind?',
			subtitle: "Tell me your idea or what you need to solve, and let's work out how to move it forward.",
			emailLabel: 'Email me',
			emailHint: 'The most direct way to talk about a project.',
			whatsappLabel: 'WhatsApp',
			whatsappHint: 'For something quick.',
			copy: 'Copy',
			copied: 'Email copied',
			copyFailed: 'Could not copy: the address is selected instead',
			timezone: 'same time as New York',
		},
		footer: {
			built: 'Built with',
		},
		consola: {
			etiqueta: 'Console: type help and press Enter',
			pista: 'type help',
			ayuda: {
				help: 'this list',
				whoami: 'who I am',
				ls: 'my projects',
				cat: 'project details: cat golazo',
				stack: 'what I work with',
				contact: 'how to reach me',
				cv: 'download my CV',
				theme: 'toggle light / dark',
				clear: 'clear the screen',
			},
			noExiste: '{cmd}: command not found. Try help',
			usoCat: 'usage: cat <project>  (try ls)',
			sinProyecto: 'cat: {slug}: no such project',
			privado: 'private code',
			verTarjeta: '→ see the card',
			cvBajando: 'downloading Fabian-Fernandez-CV-EN.pdf…',
			temaCambiado: 'theme toggled',
			sudo: 'nice try. No need for that here: just ask.',
		},
		theme: { toggle: 'Toggle theme' },
		lang: { toggle: 'Switch language' },
		notFound: {
			title: 'Page not found',
			message: 'The route you are looking for does not exist on this server.',
			back: 'Back home',
		},
	},
} as const;

export type TerminalStep = {
	cmd: string;
	out: string;
	tone?: 'accent' | 'muted';
	/** La salida es la lista de proyectos, cada uno enlazado a su tarjeta. */
	list?: 'projects';
};

/** Secuencia del terminal del hero: lo que un cliente querría saber, dicho como lo diría una shell. */
export const TERMINAL: Record<Locale, TerminalStep[]> = {
	es: [
		{ cmd: 'whoami', out: 'Fabián Fernández — ingeniero informático, full-stack' },
		{ cmd: 'ls ~/proyectos', out: '', list: 'projects' },
		{ cmd: 'cat ~/zona-horaria', out: 'La Habana, Cuba · misma hora que Nueva York', tone: 'muted' },
	],
	en: [
		{ cmd: 'whoami', out: 'Fabián Fernández — software engineer, full-stack' },
		{ cmd: 'ls ~/projects', out: '', list: 'projects' },
		{ cmd: 'cat ~/timezone', out: 'Havana, Cuba · same time as New York', tone: 'muted' },
	],
};

export function getLocale(url: URL): Locale {
	const seg = url.pathname.split('/').filter(Boolean)[0];
	return LOCALES.includes(seg as Locale) ? (seg as Locale) : DEFAULT_LOCALE;
}

export function t(locale: Locale) {
	return UI[locale];
}

/** Prefixes a path with the locale (default locale has no prefix). */
export function localePath(locale: Locale, path = '/') {
	const clean = path.startsWith('/') ? path : `/${path}`;
	if (locale === DEFAULT_LOCALE) return clean;
	return `/${locale}${clean === '/' ? '' : clean}`;
}

export function age(birthISO: string) {
	const b = new Date(birthISO);
	const now = new Date();
	let a = now.getFullYear() - b.getFullYear();
	const m = now.getMonth() - b.getMonth();
	if (m < 0 || (m === 0 && now.getDate() < b.getDate())) a--;
	return a;
}
