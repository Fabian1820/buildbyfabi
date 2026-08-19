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
	suncarInstagram: 'https://www.instagram.com/suncar.srl/',
	cv: { es: '/cv/Fabian-Fernandez-CV.pdf', en: '/cv/Fabian-Fernandez-CV-EN.pdf' },
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
		year: '2025 — hoy',
		status: 'live',
		image: '/images/projects/suncar.jpg',
		stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'MongoDB', 'Tailwind CSS'],
		links: {
			live: 'https://suncarsrl.com',
			repo: 'https://github.com/Fabian1820/SunCarWeb',
		},
		title: { es: 'SunCar', en: 'SunCar' },
		tagline: {
			es: 'Sitio corporativo y sistema interno de una empresa de energía solar',
			en: 'Corporate site and internal system for a solar energy company',
		},
		description: {
			es: 'Desarrollo el software de SunCar, empresa de instalación de paneles solares. Construí su sitio corporativo en Next.js y lidero parte del sistema interno de gestión: brigadas y servicios, control de materiales con kardex, fichas de costo y contabilidad, con reportes en PDF y Excel y soporte offline para el trabajo en campo.',
			en: 'I build the software at SunCar, a solar panel installation company. I developed their corporate site in Next.js and lead part of the internal management system: crews and services, material control with kardex, cost sheets and accounting, with PDF and Excel reports and offline support for fieldwork.',
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
		slug: 'llego',
		year: '2026',
		status: 'live',
		stack: ['Astro', 'Svelte', 'TypeScript', 'Kotlin'],
		links: { live: 'https://llegoweb-production.up.railway.app' },
		title: { es: 'Llegó', en: 'Llegó' },
		tagline: {
			es: 'Plataforma de compra asistida por IA',
			en: 'AI-assisted shopping platform',
		},
		description: {
			es: 'Plataforma de compra inteligente para restaurantes, ropa y mercado, con recomendación asistida por IA. Sitio construido con Astro e islas de Svelte; el proyecto incluye además una app Android nativa en Kotlin para el lado comercial.',
			en: 'Smart shopping platform for restaurants, clothing and groceries, with AI-assisted recommendations. The site is built with Astro and Svelte islands; the project also includes a native Android app in Kotlin for the merchant side.',
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
		slug: 'shellbox',
		year: '2025',
		status: 'live',
		stack: ['Astro', 'Svelte', 'TypeScript'],
		links: {
			live: 'https://shellbox.up.railway.app',
			repo: 'https://github.com/Fabian1820/ShellBoxLandingPage',
		},
		title: { es: 'ShellBox Encargos', en: 'ShellBox Encargos' },
		tagline: {
			es: 'Sitio de un servicio de encargos a domicilio',
			en: 'Site for a home delivery service',
		},
		description: {
			es: 'Sitio oficial de ShellBox, servicio de encargos a domicilio. Construido con Astro y componentes Svelte para mantener el HTML estático y enviar JavaScript solo donde hacía falta interactividad real.',
			en: 'Official site for ShellBox, a home delivery service. Built with Astro and Svelte components to keep the HTML static and ship JavaScript only where real interactivity was needed.',
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
			es: 'Proyecto universitario de redes neuronales: clasificación del dataset Iris mediante un mapa autoorganizado (SOM), implementado desde cero en equipo para entender el algoritmo por dentro.',
			en: 'University neural-network project: classifying the Iris dataset with a self-organizing map (SOM), implemented from scratch as a team to understand the algorithm from the inside.',
		},
	},
];

export type TechItem = { name: string; icon: string };

export const STACK: {
	key: string;
	label: { es: string; en: string };
	items: TechItem[];
}[] = [
	{
		key: 'frontend',
		label: { es: 'Frontend', en: 'Frontend' },
		items: [
			{ name: 'React', icon: 'react' },
			{ name: 'Next.js', icon: 'nextdotjs' },
			{ name: 'Astro', icon: 'astro' },
			{ name: 'Svelte', icon: 'svelte' },
			{ name: 'Nuxt', icon: 'nuxt' },
			{ name: 'TypeScript', icon: 'typescript' },
			{ name: 'Tailwind CSS', icon: 'tailwindcss' },
			{ name: 'shadcn/ui', icon: 'shadcnui' },
		],
	},
	{
		key: 'backend',
		label: { es: 'Backend', en: 'Backend' },
		items: [
			{ name: 'Python', icon: 'python' },
			{ name: 'FastAPI', icon: 'fastapi' },
			{ name: 'Node.js', icon: 'nodedotjs' },
		],
	},
	{
		key: 'data',
		label: { es: 'Datos', en: 'Data' },
		items: [
			{ name: 'MongoDB', icon: 'mongodb' },
			{ name: 'pandas', icon: 'pandas' },
		],
	},
	{
		key: 'mobile',
		label: { es: 'Móvil', en: 'Mobile' },
		items: [
			{ name: 'Kotlin', icon: 'kotlin' },
			{ name: 'Swift', icon: 'swift' },
		],
	},
	{
		key: 'tools',
		label: { es: 'Herramientas', en: 'Tooling' },
		items: [
			{ name: 'Git', icon: 'git' },
			{ name: 'Docker', icon: 'docker' },
			{ name: 'Claude Code', icon: 'claude' },
			{ name: 'Vercel', icon: 'vercel' },
			{ name: 'Railway', icon: 'railway' },
			{ name: 'Figma', icon: 'figma' },
		],
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
