import { PROJECTS, STACK, type Project } from '../data/site';

/**
 * Qué proyectos usan cada tecnología del stack. Se cruza por nombre con el
 * `stack` de cada tarjeta, así que el stack y los proyectos no pueden decir
 * cosas distintas: si una tecnología no aparece en ninguna tarjeta, no se le
 * atribuye ninguna.
 */
const clave = (nombre: string) => nombre.toLowerCase().replace(/[\s.]/g, '');

export function proyectosCon(nombre: string): Project[] {
	return PROJECTS.filter((p) => p.stack.some((s) => clave(s) === clave(nombre)));
}

export const STACK_CON_USOS = STACK.map((grupo) => ({
	...grupo,
	items: grupo.items.map((item) => ({ ...item, proyectos: proyectosCon(item.name) })),
}));
