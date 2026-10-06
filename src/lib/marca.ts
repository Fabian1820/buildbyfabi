import * as si from 'simple-icons';

export type Icono = { title: string; hex: string; path: string };

export const iconoDe = (slug: string): Icono | null => {
	const key = 'si' + slug.charAt(0).toUpperCase() + slug.slice(1);
	return ((si as unknown as Record<string, Icono>)[key]) ?? null;
};

/* Muchas marcas son negras (Next.js, Vercel) o casi blancas. Se ajusta la
   luminancia para que el color de marca se lea en ambos temas. */
const rgb = (hex: string) => [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16));
const lum = (hex: string) => {
	const [r, g, b] = rgb(hex).map((v) => {
		const s = v / 255;
		return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
const mix = (hex: string, target: number[], amount: number) =>
	'#' +
	rgb(hex)
		.map((v, i) => Math.round(v + (target[i] - v) * amount))
		.map((v) => v.toString(16).padStart(2, '0'))
		.join('');

/** `hex` viene de simple-icons sin almohadilla: sin ella la variable CSS es inválida. */
export const colorDeMarca = (hex: string) => {
	const l = lum(hex);
	return {
		light: l > 0.72 ? mix(hex, [0, 0, 0], 0.45) : `#${hex}`,
		dark: l < 0.16 ? mix(hex, [255, 255, 255], 0.78) : l < 0.3 ? mix(hex, [255, 255, 255], 0.45) : `#${hex}`,
	};
};

/** Estilo en línea con los dos colores de marca, o nada si no hay icono. */
export const estiloMarca = (icono: Icono | null) => {
	if (!icono) return undefined;
	const c = colorDeMarca(icono.hex);
	return `--brand-light:${c.light};--brand-dark:${c.dark}`;
};
