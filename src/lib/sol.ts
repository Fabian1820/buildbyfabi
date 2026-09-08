/**
 * Posición del sol sobre La Habana.
 *
 * Las mismas ecuaciones solares que uso en el gemelo digital fotovoltaico,
 * reducidas a lo que hace falta aquí: a qué altura está el sol y cuándo cruza
 * el horizonte. Algoritmo de la NOAA, exacto a menos de un minuto para fechas
 * cercanas — de sobra para decidir un tema y escribir una línea en el pie.
 *
 * OJO: `src/layouts/Layout.astro` lleva una copia mínima de `altitudSolar`
 * dentro del script que corre antes del primer pintado (no puede importar
 * módulos). Si cambia la fórmula aquí, cambia también allí.
 */

export const HABANA = {
	lat: 23.1136,
	lon: -82.3666,
	zona: 'America/Havana',
} as const;

const RAD = Math.PI / 180;

/** El disco solar se ve mientras su centro no baja de esto: refracción + radio. */
export const HORIZONTE = -0.833;

/** Altitud del sol en grados sobre el horizonte (negativa de noche). */
export function altitudSolar(fecha: Date, lat = HABANA.lat, lon = HABANA.lon): number {
	const inicioDeAnno = Date.UTC(fecha.getUTCFullYear(), 0, 1);
	const dia = Math.floor((fecha.getTime() - inicioDeAnno) / 86400000);
	const hora = fecha.getUTCHours() + fecha.getUTCMinutes() / 60 + fecha.getUTCSeconds() / 3600;

	// Ángulo fraccional del año.
	const g = ((2 * Math.PI) / 365) * (dia + (hora - 12) / 24);

	// Ecuación del tiempo, en minutos.
	const ecuacion =
		229.18 *
		(0.000075 +
			0.001868 * Math.cos(g) -
			0.032077 * Math.sin(g) -
			0.014615 * Math.cos(2 * g) -
			0.040849 * Math.sin(2 * g));

	// Declinación solar, en radianes.
	const declinacion =
		0.006918 -
		0.399912 * Math.cos(g) +
		0.070257 * Math.sin(g) -
		0.006758 * Math.cos(2 * g) +
		0.000907 * Math.sin(2 * g) -
		0.002697 * Math.cos(3 * g) +
		0.00148 * Math.sin(3 * g);

	// Hora solar verdadera y ángulo horario.
	const solarVerdadera = hora * 60 + ecuacion + 4 * lon;
	const anguloHorario = (solarVerdadera / 4 - 180) * RAD;

	const cosCenit =
		Math.sin(lat * RAD) * Math.sin(declinacion) +
		Math.cos(lat * RAD) * Math.cos(declinacion) * Math.cos(anguloHorario);

	return 90 - Math.acos(Math.min(1, Math.max(-1, cosCenit))) / RAD;
}

/** ¿Hay luz ahora mismo? */
export function esDeDia(fecha: Date, lat = HABANA.lat, lon = HABANA.lon): boolean {
	return altitudSolar(fecha, lat, lon) > HORIZONTE;
}

/**
 * Próxima vez que el sol cruza el horizonte, buscando hacia delante.
 *
 * Se resuelve por barrido y bisección en vez de despejar el ángulo horario:
 * son cuatro mil operaciones, no hay ambigüedad de signos ni de huso, y vale
 * igual para cualquier latitud.
 */
export function proximoCruce(
	desde: Date,
	lat = HABANA.lat,
	lon = HABANA.lon,
	haciaAtras = false
): { fecha: Date; amanece: boolean } | null {
	const PASO = (haciaAtras ? -4 : 4) * 60 * 1000;
	const LIMITE = 26 * 60 * 60 * 1000;

	let anterior = desde.getTime();
	let deDia = esDeDia(desde, lat, lon);

	for (let t = anterior + PASO; Math.abs(t - desde.getTime()) < LIMITE; t += PASO) {
		const ahoraDeDia = esDeDia(new Date(t), lat, lon);
		if (ahoraDeDia === deDia) {
			anterior = t;
			continue;
		}

		// El cruce cayó entre `anterior` y `t`: se afina a segundos.
		let dentro = anterior;
		let fuera = t;
		for (let i = 0; i < 14; i++) {
			const medio = (dentro + fuera) / 2;
			if (esDeDia(new Date(medio), lat, lon) === deDia) dentro = medio;
			else fuera = medio;
		}
		return { fecha: new Date(Math.round(fuera)), amanece: haciaAtras ? deDia : ahoraDeDia };
	}

	// Sin cruces en 26 horas: sol de medianoche o noche polar. Aquí no pasa.
	return null;
}

/** Hora de La Habana, siempre, sin importar dónde esté quien mira. */
export function horaEnHabana(fecha: Date, locale: 'es' | 'en'): string {
	return new Intl.DateTimeFormat(locale === 'es' ? 'es-CU' : 'en-US', {
		timeZone: HABANA.zona,
		hour: 'numeric',
		minute: '2-digit',
		hour12: true,
	}).format(fecha);
}
