export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const UI = {
	es: {
		nav: { about: 'Sobre mí', stack: 'Stack', work: 'Proyectos', contact: 'Contacto' },
		hero: {
			role: 'Ingeniero Informático · Desarrollador Full-Stack',
			tagline: 'Construyo software de extremo a extremo — del modelo de datos al último pixel.',
			available: 'Disponible para proyectos freelance',
			ctaCv: 'Descargar CV',
			ctaContact: 'Hablemos',
		},
		about: {
			eyebrow: 'Sobre mí',
			title: 'De la CUJAE a producción',
			p1: 'Soy ingeniero informático, graduado de la CUJAE en julio de 2026. Mi tesis fue un gemelo digital web para gestionar, predecir y monitorear una microrred fotovoltaica: en lugar de resolverlo para una sola instalación, lo diseñé alrededor de un conjunto de reglas configurables, de modo que pudiera integrarse con distintas APIs y adaptarse a escenarios reales muy diferentes entre sí.',
			p2html:
				'Desde hace un año trabajo en <a href="__SUNCAR__" target="_blank" rel="noopener noreferrer" class="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">SunCar</a> como desarrollador y uno de los líderes del equipo, construyendo tanto su sitio corporativo como el sistema interno con el que la empresa opera cada día. Además trabajo como freelance en remoto: me interesan los proyectos donde pueda acompañar el producto de principio a fin, o sumarme en marcha y aportar justo donde el equipo necesita empuje para seguir avanzando.',
			p3: 'Mi terreno es React y Next.js en el frontend, FastAPI y MongoDB en el backend, y Claude Code como parte natural del flujo — creo que el desarrollo asistido por IA, bien usado, eleva el nivel del trabajo en vez de reemplazarlo. Más allá del stack, lo que más disfruto es levantar requisitos con el cliente, modelar la arquitectura antes de escribir la primera línea, romper mis propias implementaciones buscando por dónde fallan y cuidar la seguridad desde el diseño. Y trabajo mejor acompañado: prefiero discutir una decisión técnica con el equipo que acertarla solo.',
			age: 'años',
			basedIn: 'Desde',
			credentials: 'Credenciales',
			closeCredential: 'Cerrar',
		},
		stack: {
			eyebrow: 'Stack',
			title: 'Con lo que trabajo',
			subtitle: 'Lo que uso en proyectos reales, no una lista de todo lo que he tocado alguna vez.',
		},
		work: {
			eyebrow: 'Proyectos',
			title: 'Cosas que he construido',
			subtitle: 'Sistemas en producción, productos propios y trabajo académico.',
			viewLive: 'Ver en vivo',
			viewCode: 'Código',
			status: { live: 'En producción', wip: 'En desarrollo', private: 'Privado', archived: 'Archivado' },
		},
		contact: {
			eyebrow: 'Contacto',
			title: '¿Tienes algo en mente?',
			subtitle: 'Cuéntame tu idea o lo que necesitas resolver, y vemos juntos cómo llevarlo adelante.',
			emailLabel: 'Escríbeme',
			whatsappLabel: 'WhatsApp',
			githubLabel: 'GitHub',
			instagramLabel: 'Instagram',
			copy: 'Copiar',
		},
		footer: {
			built: 'Construido con',
			rights: 'Todos los derechos reservados.',
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
		nav: { about: 'About', stack: 'Stack', work: 'Work', contact: 'Contact' },
		hero: {
			role: 'Software Engineer · Full-Stack Developer',
			tagline: 'I build software end to end — from the data model to the last pixel.',
			available: 'Available for freelance work',
			ctaCv: 'Download CV',
			ctaContact: 'Get in touch',
		},
		about: {
			eyebrow: 'About',
			title: 'From CUJAE to production',
			p1: 'I am a software engineer, graduated from CUJAE in July 2026. My thesis was a web digital twin to manage, forecast and monitor a photovoltaic microgrid: instead of solving it for a single installation, I designed it around a configurable rule set so it could integrate with different APIs and adapt to very different real-world scenarios.',
			p2html:
				'For the past year I have been working at <a href="__SUNCAR__" target="_blank" rel="noopener noreferrer" class="font-medium text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent">SunCar</a> as a developer and one of the team leads, building both their corporate site and the internal system the company runs on every day. I also work as a remote freelancer: I am drawn to projects where I can follow the product from start to finish, or join one already in motion and push exactly where the team needs momentum.',
			p3: 'My ground is React and Next.js on the frontend, FastAPI and MongoDB on the backend, and Claude Code as a natural part of the workflow — I believe AI-assisted development, used well, raises the bar of the work rather than replacing it. Beyond the stack, what I enjoy most is gathering requirements with the client, modelling the architecture before writing the first line, breaking my own implementations to find where they fail, and building security in from the design stage. And I work better with company: I would rather debate a technical decision with the team than get it right alone.',
			age: 'years old',
			basedIn: 'Based in',
			credentials: 'Credentials',
			closeCredential: 'Close',
		},
		stack: {
			eyebrow: 'Stack',
			title: 'What I work with',
			subtitle: "What I use on real projects — not a list of everything I've ever touched.",
		},
		work: {
			eyebrow: 'Work',
			title: 'Things I have built',
			subtitle: 'Production systems, my own products, and academic work.',
			viewLive: 'Live site',
			viewCode: 'Source',
			status: { live: 'In production', wip: 'In progress', private: 'Private', archived: 'Archived' },
		},
		contact: {
			eyebrow: 'Contact',
			title: 'Got something in mind?',
			subtitle: "Tell me your idea or what you need to solve, and let's work out how to move it forward.",
			emailLabel: 'Email me',
			whatsappLabel: 'WhatsApp',
			githubLabel: 'GitHub',
			instagramLabel: 'Instagram',
			copy: 'Copy',
		},
		footer: {
			built: 'Built with',
			rights: 'All rights reserved.',
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

/** Secuencia del terminal del hero: guiños de cultura dev, no un resumen del CV. */
export const TERMINAL: Record<Locale, { cmd: string; out: string; tone?: 'accent' | 'muted' }[]> = {
	es: [
		{ cmd: 'sudo make me a sandwich', out: 'Okay.' },
		{ cmd: 'rm -rf node_modules && npm i', out: 'Ritual completado. El bug sigue ahí.', tone: 'muted' },
		{ cmd: 'git log --oneline -1', out: 'a1b2c3d  fix: ahora sí, esta vez de verdad', tone: 'muted' },
		{ cmd: ':wq', out: 'Saliste de vim a la primera. Nadie te va a creer.', tone: 'muted' },
		{ cmd: 'echo $STATUS', out: '● Disponible para proyectos freelance', tone: 'accent' },
	],
	en: [
		{ cmd: 'sudo make me a sandwich', out: 'Okay.' },
		{ cmd: 'rm -rf node_modules && npm i', out: 'Ritual complete. The bug is still there.', tone: 'muted' },
		{ cmd: 'git log --oneline -1', out: 'a1b2c3d  fix: it works now, for real this time', tone: 'muted' },
		{ cmd: ':wq', out: 'You exited vim on the first try. Nobody will believe you.', tone: 'muted' },
		{ cmd: 'echo $STATUS', out: '● Available for freelance work', tone: 'accent' },
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
