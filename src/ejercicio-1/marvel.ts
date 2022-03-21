/**
 * Ejercicio 1. El combate definitivo
 * @module Marvel
 * @author Andrea Hernández Martín
 */

import {Fighter} from './fighter';
import {DatosBasicos} from './fighter';
import {Universo} from './fighter';

/**
* Clase Marvel
*/
export class Marvel extends Fighter {
  /**
  * Constructor de la clase Marvel
  * @param nombre nombre del luchador de Marvel
  * @param peso peso del luchador de Marvel
  * @param altura altura del luchador de Marvel
  * @param datos datos de ataque, velocidad, defensa y hp
  * @param universo universo al que pertenece luchador de Marvel
  * @param frase frase que dice el luchador de Marvel
  */
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
