export const LOCALES = ['es', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

export const UI = {
	es: {
		nav: { about: 'Sobre mí', stack: 'Stack', work: 'Proyectos', contact: 'Contacto' },
		hero: {
			role: 'Ingeniero Informático · Desarrollador Full-Stack',
			tagline: 'Construyo software web de extremo a extremo — del modelo de datos al último pixel.',
			available: 'Disponible para proyectos freelance',
			ctaWork: 'Ver proyectos',
			ctaContact: 'Hablemos',
			scroll: 'Desliza',
		},
		terminal: {
			bio: 'Ingeniero informático. Construyo sistemas que la gente usa todos los días.',
			role: 'Freelance · Remoto',
		},
		about: {
			eyebrow: 'Sobre mí',
			title: 'Software que se usa, no que se demuestra',
			p1: 'Soy ingeniero informático, graduado de la CUJAE en 2026. Llevo el último año construyendo sistemas de gestión reales para empresas: el tipo de software que alguien abre cada mañana para trabajar, no demos que se ven bien en una captura de pantalla.',
			p2: 'Mi terreno es React y Next.js en el frontend, FastAPI y MongoDB en el backend. Me interesa sobre todo la parte que nadie ve: modelar bien los datos, automatizar el proceso que hoy se hace a mano en una hoja de cálculo, y dejar el código en un estado donde el siguiente cambio sea fácil.',
			p3: 'Mi tesis fue un gemelo digital web para monitorear y predecir el comportamiento de una microrred fotovoltaica, diseñado con reglas configurables para integrarse con distintas APIs. Ahora trabajo como freelance en remoto, y me interesan proyectos donde pueda acompañar el producto de principio a fin.',
			age: 'años',
			basedIn: 'Desde',
			credentials: 'Credenciales',
			viewCredential: 'Ver documento',
			closeCredential: 'Cerrar',
		},
		stack: {
			eyebrow: 'Stack',
			title: 'Con lo que trabajo',
			subtitle: 'Lo que más uso en proyectos reales, no una lista de todo lo que he tocado alguna vez.',
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
			subtitle: 'Cuéntame qué necesitas construir. Respondo en menos de 24 horas.',
			emailLabel: 'Escríbeme',
			whatsappLabel: 'WhatsApp',
			githubLabel: 'GitHub',
			instagramLabel: 'Instagram',
			downloadCv: 'Descargar CV',
			copy: 'Copiar',
			copied: 'Copiado',
		},
		footer: {
			built: 'Construido con',
			rights: 'Todos los derechos reservados.',
			source: 'Código de este sitio',
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
			tagline: 'I build end-to-end web software — from the data model to the last pixel.',
			available: 'Available for freelance work',
			ctaWork: 'See my work',
			ctaContact: 'Get in touch',
			scroll: 'Scroll',
		},
		terminal: {
			bio: 'Software engineer. I build systems people use every single day.',
			role: 'Freelance · Remote',
		},
		about: {
			eyebrow: 'About',
			title: 'Software that gets used, not just demoed',
			p1: "I'm a software engineer, graduated from CUJAE in 2026. I've spent the past year building real management systems for companies — the kind of software someone opens every morning to do their job, not demos that look good in a screenshot.",
			p2: 'My ground is React and Next.js on the frontend, FastAPI and MongoDB on the backend. What interests me most is the part nobody sees: modelling the data properly, automating the process that today lives in a spreadsheet, and leaving the code in a state where the next change is easy.',
			p3: 'My thesis was a web digital twin to monitor and forecast the behaviour of a photovoltaic microgrid, designed around configurable rules so it could integrate with different APIs. I now work as a remote freelancer, and I look for projects where I can follow the product from start to finish.',
			age: 'years old',
			basedIn: 'Based in',
			credentials: 'Credentials',
			viewCredential: 'View document',
			closeCredential: 'Close',
		},
		stack: {
			eyebrow: 'Stack',
			title: 'What I work with',
			subtitle: "What I actually reach for on real projects — not a list of everything I've ever touched.",
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
			subtitle: 'Tell me what you need to build. I reply within 24 hours.',
			emailLabel: 'Email me',
			whatsappLabel: 'WhatsApp',
			githubLabel: 'GitHub',
			instagramLabel: 'Instagram',
			downloadCv: 'Download CV',
			copy: 'Copy',
			copied: 'Copied',
		},
		footer: {
			built: 'Built with',
			rights: 'All rights reserved.',
			source: 'Source of this site',
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
