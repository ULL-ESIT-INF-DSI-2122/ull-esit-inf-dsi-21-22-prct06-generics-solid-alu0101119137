/**
 * Ejercicio 1. El combate definitivo
 * @module Combat
 * @author Andrea Hernández Martín
 */

import {Fighter} from './fighter';
import {DatosBasicos} from './fighter';
import {Universo} from './fighter';

/**
 * Clase Combat que simula el combate entre dos luchadores
 */
export class Combat<T extends Fighter, U extends Fighter> {
  /**
   * Constructor de la clase Combat
   * @param luchador1 Primer luchador
   * @param luchador2 Segundo luchador
   */
  constructor(public luchador1: T, public luchador2: U) {
  }
}
