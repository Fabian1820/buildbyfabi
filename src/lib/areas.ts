/**
 * De qué está hecho cada proyecto, en cinco números.
 *
 * Cada tecnología del stack se reparte entre áreas, y el proyecto acaba siendo
 * el promedio de las suyas. No es una opinión sobre el proyecto: es la mezcla
 * real de su stack, la que ya se ve en las etiquetas de cada tarjeta. Si mañana
 * cambia el stack, cambia el vector — y el panal se recoloca solo.
 */

export const AREAS = [
	{ clave: 'interfaz', label: { es: 'interfaz', en: 'interface' } },
	{ clave: 'servidor', label: { es: 'servidor', en: 'server' } },
	{ clave: 'datos', label: { es: 'datos', en: 'data' } },
	{ clave: 'modelo', label: { es: 'modelo', en: 'model' } },
	{ clave: 'movil', label: { es: 'móvil', en: 'mobile' } },
	{ clave: 'oficio', label: { es: 'oficio', en: 'tooling' } },
] as const;

export type AreaClave = (typeof AREAS)[number]['clave'];

/** Una tecnología puede pesar en más de un área; se reparte a partes iguales. */
const DE_QUE_ES: Record<string, AreaClave[]> = {
	'Next.js': ['interfaz'],
	React: ['interfaz'],
	Astro: ['interfaz'],
	Svelte: ['interfaz'],
	Nuxt: ['interfaz'],
	Vue: ['interfaz'],
	TypeScript: ['interfaz'],
	'Tailwind CSS': ['interfaz'],
	'shadcn/ui': ['interfaz'],
	JavaFX: ['interfaz'],
	FastAPI: ['servidor'],
	Flask: ['servidor'],
	'Node.js': ['servidor'],
	Python: ['servidor'],
	Java: ['servidor'],
	MongoDB: ['datos'],
	pandas: ['datos'],
	S3: ['datos'],
	'scikit-learn': ['modelo'],
	SOM: ['modelo'],
	Kotlin: ['movil'],
	Swift: ['movil'],
	Maven: ['oficio'],
	JUnit: ['oficio'],
	Docker: ['oficio'],
	Git: ['oficio'],
	Railway: ['oficio'],
	Vercel: ['oficio'],
};

/** Vector normalizado: cuánto pesa cada área en un stack. */
export function vectorDeStack(stack: readonly string[]): number[] {
	const pesos = AREAS.map(() => 0);
	let total = 0;

	for (const tecnologia of stack) {
		const areas = DE_QUE_ES[tecnologia];
		if (!areas) continue;
		const parte = 1 / areas.length;
		for (const area of areas) {
			pesos[AREAS.findIndex((a) => a.clave === area)] += parte;
			total += parte;
		}
	}

	return total === 0 ? pesos : pesos.map((p) => p / total);
}

/** Las áreas con peso, de mayor a menor, ya escritas: «interfaz 67%». */
export function areasDe(vector: readonly number[], locale: 'es' | 'en'): string[] {
	return AREAS.map((area, i) => ({ area, peso: vector[i] }))
		.filter(({ peso }) => peso > 0)
		.sort((a, b) => b.peso - a.peso)
		.map(({ area, peso }) => `${area.label[locale]} ${Math.round(peso * 100)}%`);
}
