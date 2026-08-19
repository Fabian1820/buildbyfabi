export const SITE = {
	name: 'Fabián Fernández Gálvez',
	shortName: 'Fabián Fernández',
	handle: 'buildbyfabi',
	domain: 'buildbyfabi.dev',
	url: 'https://buildbyfabi.dev',
	birthDate: '2003-11-18',
	location: { es: 'La Habana, Cuba', en: 'Havana, Cuba' },
	email: 'fernandezfabian2003@gmail.com',
	github: 'https://github.com/Fabian1820',
	githubUser: 'Fabian1820',
	instagram: 'https://www.instagram.com/bian0311/',
	whatsapp: 'https://wa.me/5358412294',
	whatsappDisplay: '+53 5841 2294',
	cv: { es: '/cv/Fabian-Fernandez-CV-ES.pdf', en: '/cv/Fabian-Fernandez-CV-EN.pdf' },
} as const;

export type Project = {
	slug: string;
	featured?: boolean;
	year: string;
	status?: 'live' | 'wip' | 'private' | 'archived';
	image?: string;
	stack: string[];
	links?: { live?: string; repo?: string };
	title: { es: string; en: string };
	tagline: { es: string; en: string };
	description: { es: string; en: string };
};

export const PROJECTS: Project[] = [
	{
		slug: 'suncar',
		featured: true,
		year: '2025 — 2026',
		status: 'live',
		stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
		links: {
			live: 'https://v0-solar-panel-admin-system.vercel.app',
			repo: 'https://github.com/Fabian1820/SunCarWeb',
		},
		title: { es: 'SunCar · Sistema de gestión', en: 'SunCar · Management System' },
		tagline: {
			es: 'ERP a medida para una empresa de energía fotovoltaica',
			en: 'Custom ERP for a photovoltaic energy company',
		},
		description: {
			es: 'Sistema administrativo completo para una empresa de instalación de paneles solares: gestión de brigadas y servicios, control de materiales con kardex, fichas de costo y contabilidad. Genera reportes en PDF y Excel, integra mapas para ubicar instalaciones y funciona como PWA para usarse en campo sin conexión estable.',
			en: 'End-to-end admin system for a solar panel installation company: crew and service management, material control with kardex, cost sheets and accounting. It generates PDF and Excel reports, integrates maps to locate installations, and ships as a PWA so it works in the field without a stable connection.',
		},
	},
	{
		slug: 'gemelo-digital',
		featured: true,
		year: '2026',
		status: 'private',
		stack: ['React', 'FastAPI', 'Python', 'MongoDB'],
		title: { es: 'Gemelo Digital Fotovoltaico', en: 'Photovoltaic Digital Twin' },
		tagline: {
			es: 'Tesis de grado — monitoreo y predicción de microrredes solares',
			en: 'Thesis project — solar microgrid monitoring and forecasting',
		},
		description: {
			es: 'Plataforma web para gestionar, predecir y monitorear el comportamiento de una microrred fotovoltaica. La diseñé de forma genérica, con un conjunto de reglas configurables, para que pueda integrarse con distintas APIs y adaptarse a cualquier escenario real de despliegue en vez de quedar atada a una sola instalación.',
			en: 'Web platform to manage, forecast and monitor the behaviour of a photovoltaic microgrid. I designed it generically, around a configurable rule set, so it can integrate with different APIs and adapt to any real deployment scenario instead of being tied to a single installation.',
		},
	},
	{
		slug: 'trimio',
		year: '2026',
		status: 'wip',
		stack: ['Nuxt', 'Vue', 'FastAPI', 'MongoDB'],
		title: { es: 'Trimio', en: 'Trimio' },
		tagline: {
			es: 'SaaS de reservas para barberías',
			en: 'Booking SaaS for barbershops',
		},
		description: {
			es: 'Plataforma de reservas online para barberías: agenda por barbero, catálogo de servicios, gestión de clientes y panel de control para el negocio. Producto propio, en desarrollo activo.',
			en: 'Online booking platform for barbershops: per-barber scheduling, service catalogue, client management and a business dashboard. My own product, in active development.',
		},
	},
	{
		slug: 'cachito',
		year: '2026',
		status: 'wip',
		stack: ['Swift', 'SwiftUI', 'SwiftData', 'CloudKit'],
		title: { es: 'Cachito', en: 'Cachito' },
		tagline: {
			es: 'App iOS de memoria personal',
			en: 'Personal memory app for iOS',
		},
		description: {
			es: 'App nativa de iOS para recordar lo que se olvida: tareas, lugares y fechas importantes. Construida con SwiftUI y SwiftData, sincroniza entre dispositivos vía CloudKit sin backend propio ni cuentas de usuario.',
			en: 'Native iOS app for the things you forget: tasks, places and important dates. Built with SwiftUI and SwiftData, it syncs across devices through CloudKit with no backend of its own and no user accounts.',
		},
	},
	{
		slug: 'llego-business',
		year: '2026',
		status: 'private',
		stack: ['Kotlin', 'Android'],
		links: { repo: 'https://github.com/Fabian1820/LlegoBusiness' },
		title: { es: 'Llego Business', en: 'Llego Business' },
		tagline: {
			es: 'App Android nativa para comercios',
			en: 'Native Android app for merchants',
		},
		description: {
			es: 'Aplicación Android nativa en Kotlin para el lado comercial de Llego: gestión de catálogo, pedidos y estado del negocio desde el móvil.',
			en: 'Native Android app in Kotlin for the merchant side of Llego: catalogue, orders and business status management from the phone.',
		},
	},
	{
		slug: 'shellbox',
		year: '2025',
		status: 'archived',
		stack: ['Svelte', 'Astro', 'TypeScript'],
		links: { repo: 'https://github.com/Fabian1820/ShellBoxLandingPage' },
		title: { es: 'ShellBox · Sitio de agencia', en: 'ShellBox · Agency Site' },
		tagline: {
			es: 'Landing corporativa con Svelte + Astro',
			en: 'Corporate landing with Svelte + Astro',
		},
		description: {
			es: 'Sitio oficial de la agencia ShellBox. Construido con Astro y componentes Svelte para mantener el HTML estático y enviar JavaScript solo donde hacía falta interactividad.',
			en: 'Official site for the ShellBox agency. Built with Astro and Svelte components to keep the HTML static and ship JavaScript only where interactivity was actually needed.',
		},
	},
	{
		slug: 'neurona-iris',
		year: '2025',
		status: 'archived',
		stack: ['Java', 'SOM'],
		links: { repo: 'https://github.com/Fabian1820/NeuronaIris' },
		title: { es: 'NeuronaIris', en: 'NeuronaIris' },
		tagline: {
			es: 'Clasificador con mapa autoorganizado',
			en: 'Self-organizing map classifier',
		},
		description: {
			es: 'Proyecto académico de redes neuronales: clasificación del dataset Iris mediante un mapa autoorganizado (SOM), implementado desde cero para entender el algoritmo por dentro.',
			en: 'Academic neural-network project: classifying the Iris dataset with a self-organizing map (SOM), implemented from scratch to understand the algorithm from the inside.',
		},
	},
];

export const STACK = [
	{
		key: 'frontend',
		label: { es: 'Frontend', en: 'Frontend' },
		items: ['React', 'Next.js', 'Astro', 'Svelte', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
	},
	{
		key: 'backend',
		label: { es: 'Backend', en: 'Backend' },
		items: ['Python', 'FastAPI', 'REST APIs', 'Node.js'],
	},
	{
		key: 'data',
		label: { es: 'Datos', en: 'Data' },
		items: ['MongoDB', 'SwiftData', 'Pandas'],
	},
	{
		key: 'mobile',
		label: { es: 'Móvil', en: 'Mobile' },
		items: ['Kotlin', 'Swift', 'SwiftUI'],
	},
	{
		key: 'tools',
		label: { es: 'Herramientas', en: 'Tooling' },
		items: ['Git', 'Docker', 'Vercel', 'Railway', 'Figma'],
	},
];

export const CREDENTIALS = [
	{
		slug: 'titulo',
		image: '/images/titulo.jpg',
		year: '2026',
		title: { es: 'Ingeniería Informática', en: 'Computer Engineering' },
		issuer: {
			es: 'Universidad Tecnológica de La Habana «José Antonio Echeverría» (CUJAE)',
			en: 'Technological University of Havana "José Antonio Echeverría" (CUJAE)',
		},
	},
	{
		slug: 'certificado-ia',
		image: '/images/certificado-ia.jpg',
		year: '2026',
		title: { es: 'Certificación en Inteligencia Artificial', en: 'Artificial Intelligence Certification' },
		issuer: { es: 'CUJAE', en: 'CUJAE' },
	},
];
