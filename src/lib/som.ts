/**
 * Un mapa autoorganizado diminuto, sobre rejilla hexagonal.
 *
 * Es la misma idea que Panal SOM —mi proyecto en JavaFX— reducida a lo justo
 * para que quepa en una página y se entrene en dos segundos: neuronas en
 * coordenadas «odd-r», vecindad gaussiana medida en saltos de celda, y radio y
 * tasa de aprendizaje que decaen con las épocas.
 *
 * Aquí las muestras son mis proyectos, descritos por el peso de cada área en
 * su stack. Nadie le dice al mapa dónde va cada uno: se colocan solos, y los
 * que se parecen acaban vecinos.
 */

export type Celda = { columna: number; fila: number };

export class MapaAutoorganizado {
	readonly columnas: number;
	readonly filas: number;
	readonly dimension: number;
	readonly pesos: Float64Array[];

	private epoca = 0;
	private readonly epocas: number;
	private readonly radioInicial: number;
	private readonly tasaInicial: number;
	private readonly azar: () => number;

	constructor(opciones: {
		columnas: number;
		filas: number;
		dimension: number;
		epocas?: number;
		tasa?: number;
		semilla?: number;
	}) {
		this.columnas = opciones.columnas;
		this.filas = opciones.filas;
		this.dimension = opciones.dimension;
		this.epocas = opciones.epocas ?? 40;
		this.tasaInicial = opciones.tasa ?? 0.5;
		this.radioInicial = Math.max(this.columnas, this.filas) / 2;
		this.azar = generador(opciones.semilla ?? 20031118);

		this.pesos = Array.from({ length: this.columnas * this.filas }, () => {
			const w = new Float64Array(this.dimension);
			for (let i = 0; i < this.dimension; i++) w[i] = this.azar();
			return w;
		});
	}

	get terminado() {
		return this.epoca >= this.epocas;
	}

	/** Neurona más parecida a un vector: la BMU. */
	mejorNeurona(vector: readonly number[]): number {
		let mejor = 0;
		let minima = Infinity;
		for (let i = 0; i < this.pesos.length; i++) {
			const d = distancia(this.pesos[i], vector);
			if (d < minima) {
				minima = d;
				mejor = i;
			}
		}
		return mejor;
	}

	/**
	 * Una época: cada muestra tira de su BMU y de la vecindad que la rodea.
	 * El radio y la tasa decaen exponencialmente, así el mapa se ordena
	 * primero en grande y luego afina.
	 */
	paso(muestras: readonly (readonly number[])[]): void {
		if (this.terminado) return;

		const avance = this.epoca / this.epocas;
		const radio = Math.max(0.9, this.radioInicial * Math.exp(-avance * 3));
		const tasa = this.tasaInicial * Math.exp(-avance * 2.5);
		const dosRadioCuadrado = 2 * radio * radio;

		for (const muestra of barajar(muestras, this.azar)) {
			const ganadora = this.mejorNeurona(muestra);
			const centro = this.celda(ganadora);

			for (let i = 0; i < this.pesos.length; i++) {
				const salto = this.saltos(centro, this.celda(i));
				if (salto > radio * 2.5) continue;

				const vecindad = Math.exp(-(salto * salto) / dosRadioCuadrado);
				const empuje = tasa * vecindad;
				if (empuje < 0.001) continue;

				const w = this.pesos[i];
				for (let d = 0; d < this.dimension; d++) {
					w[d] += empuje * (muestra[d] - w[d]);
				}
			}
		}

		this.epoca++;
	}

	celda(indice: number): Celda {
		return { columna: indice % this.columnas, fila: Math.floor(indice / this.columnas) };
	}

	/** Distancia en saltos entre dos celdas de una rejilla hexagonal «odd-r». */
	saltos(a: Celda, b: Celda): number {
		const [ax, az] = aCubo(a);
		const [bx, bz] = aCubo(b);
		const dx = ax - bx;
		const dz = az - bz;
		const dy = -dx - dz;
		return Math.max(Math.abs(dx), Math.abs(dy), Math.abs(dz));
	}
}

/** Distancia euclídea al cuadrado: para comparar no hace falta la raíz. */
function distancia(a: Float64Array, b: readonly number[]): number {
	let suma = 0;
	for (let i = 0; i < a.length; i++) {
		const d = a[i] - b[i];
		suma += d * d;
	}
	return suma;
}

/** «odd-r» a coordenadas cúbicas, donde las seis vecinas están a un salto. */
function aCubo({ columna, fila }: Celda): [number, number] {
	const x = columna - (fila - (fila & 1)) / 2;
	return [x, fila];
}

/** Congruencial lineal: el mismo mapa en cada visita, y sin dependencias. */
function generador(semilla: number): () => number {
	let estado = semilla >>> 0;
	return () => {
		estado = (estado * 1664525 + 1013904223) >>> 0;
		return estado / 4294967296;
	};
}

function barajar<T>(items: readonly T[], azar: () => number): T[] {
	const copia = items.slice();
	for (let i = copia.length - 1; i > 0; i--) {
		const j = Math.floor(azar() * (i + 1));
		[copia[i], copia[j]] = [copia[j], copia[i]];
	}
	return copia;
}
