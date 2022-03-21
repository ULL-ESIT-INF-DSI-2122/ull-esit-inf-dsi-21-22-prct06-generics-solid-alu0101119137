/**
 * Ejercicio 1. El combate definitivo
 * @module DC
 * @author Andrea Hernández Martín
 */

import {Fighter} from './fighter';
import {DatosBasicos} from './fighter';
import {Universo} from './fighter';

/**
 * Clase DC
 */
export class DC extends Fighter {
  /**
 * Constructor de la clase DC
 * @param nombre nombre del luchador de DC
 * @param peso peso del luchador de DC
 * @param altura altura del luchador de DC
 * @param datos datos de ataque, velocidad, defensa y hp
 * @param universo universo al que pertenece luchador de DC
 * @param frase frase que dice el luchador de DC
 */
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
