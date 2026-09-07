import type { ImageMetadata } from 'astro';

import golazoImg from '../assets/projects/golazo.jpg';
import llegoImg from '../assets/projects/llego.jpg';
import panalSomImg from '../assets/projects/panal-som.png';
import shellboxImg from '../assets/projects/shellbox.jpg';
import suncarImg from '../assets/projects/suncar.jpg';
import trimioImg from '../assets/projects/trimio.jpg';

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
	status?: 'live' | 'wip' | 'oss' | 'private' | 'archived';
	image?: ImageMetadata;
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
		image: suncarImg,
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
		image: llegoImg,
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
		image: trimioImg,
		stack: ['Nuxt', 'Vue', 'FastAPI', 'MongoDB'],
		links: { live: 'https://trimio-frontend-production.up.railway.app' },
		title: { es: 'Trimio', en: 'Trimio' },
		tagline: {
			es: 'SaaS de reservas para barberías',
			en: 'Booking SaaS for barbershops',
		},
		description: {
			es: 'Plataforma de reservas online para barberías: cada negocio tiene su página pública con su marca, sus servicios y sus horarios, y el barbero gestiona citas, equipo y galería desde su panel. Producto propio, con demo abierta y en desarrollo activo.',
			en: 'Online booking platform for barbershops: each business gets a public page with its own brand, services and opening hours, while the barber manages appointments, staff and gallery from a dashboard. My own product, with an open demo and in active development.',
		},
	},
	{
		slug: 'shellbox',
		year: '2025 — hoy',
		status: 'live',
		image: shellboxImg,
		stack: ['Astro', 'Svelte', 'TypeScript', 'MongoDB', 'S3'],
		links: {
			live: 'https://shellbox.up.railway.app',
			repo: 'https://github.com/Fabian1820/ShellBoxLandingPage',
		},
		title: { es: 'ShellBox Encargos', en: 'ShellBox Encargos' },
		tagline: {
			es: 'Encargos desde Estados Unidos hasta La Habana',
			en: 'Parcel service from the United States to Havana',
		},
		description: {
			es: 'Sitio y panel de ShellBox, agencia que compra en tiendas de Estados Unidos y lleva el pedido hasta Cuba. Astro con renderizado en servidor e islas de Svelte solo donde hace falta interactividad: catálogo de stock sobre MongoDB, panel de administración con sesión por JWT y subida de fotos a S3, y todas las tarifas centralizadas en un único archivo de configuración.',
			en: 'Site and dashboard for ShellBox, an agency that buys from US stores and ships the order to Cuba. Astro with server rendering and Svelte islands only where interactivity is needed: a stock catalogue backed by MongoDB, an admin panel with JWT sessions and photo uploads to S3, and every rate centralised in a single configuration file.',
		},
	},
	{
		slug: 'golazo',
		year: '2026',
		status: 'oss',
		image: golazoImg,
		stack: ['Python', 'scikit-learn', 'pandas', 'Flask'],
		links: { repo: 'https://github.com/Fabian1820/golazo' },
		title: { es: 'Golazo', en: 'Golazo' },
		tagline: {
			es: 'Predicción calibrada de fútbol, con backtest reproducible',
			en: 'Calibrated football forecasting with a reproducible backtest',
		},
		description: {
			es: 'Modelo de probabilidades para las cinco grandes ligas europeas. La primera versión entrenaba con estadísticas del mismo partido que intentaba predecir, así que la reconstruí entera: una sola definición de las variables para entrenamiento y producción, backtest walk-forward sobre 12.553 partidos que el modelo nunca vio y un registro encadenado por hash que firma cada pronóstico antes del saque inicial.',
			en: 'Probability model for the five big European leagues. The first version trained on statistics from the very match it was predicting, so I rebuilt it from scratch: a single feature definition shared by training and production, a walk-forward backtest over 12,553 matches the model never saw, and a hash-chained ledger that signs every forecast before kick-off.',
		},
	},
	{
		slug: 'panal-som',
		year: '2025 — 2026',
		status: 'oss',
		image: panalSomImg,
		stack: ['Java', 'JavaFX', 'Maven', 'JUnit'],
		links: { repo: 'https://github.com/Fabian1820/panal-som' },
		title: { es: 'Panal SOM', en: 'Panal SOM' },
		tagline: {
			es: 'Mapas autoorganizados sobre cualquier CSV',
			en: 'Self-organizing maps over any CSV',
		},
		description: {
			es: 'Aplicación de escritorio que entrena mapas autoorganizados sobre cualquier CSV numérico, con tres topologías, U-matrix, planos de componentes y búsqueda automática de hiperparámetros. Nació como proyecto de equipo en la CUJAE y lo retomé para soltarlo del dataset con el que nació, medir su calidad con validación cruzada y dejarlo empaquetado, con 100 pruebas e integración continua.',
			en: 'Desktop application that trains self-organizing maps over any numeric CSV, with three topologies, a U-matrix, component planes and automatic hyperparameter search. It started as a team project at CUJAE and I picked it up to decouple it from the dataset it was born with, measure its quality with cross-validation and ship it packaged, with 100 tests and continuous integration.',
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
