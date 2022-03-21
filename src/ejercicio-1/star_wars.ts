/**
 * Ejercicio 1. El combate definitivo
 * @module StarWars
 * @author Andrea Hernández Martín
 */

import {Fighter} from './fighter';
import {DatosBasicos} from './fighter';
import {Universo} from './fighter';

/**
 * Clase StarWars
 */
export class StarWars extends Fighter {
  /**
 * Constructor de la clase StarWars
 * @param nombre nombre del luchador de StarWars
 * @param peso peso del luchador de StarWars
 * @param altura altura del luchador de StarWars
 * @param datos datos de ataque, velocidad, defensa y hp
 * @param universo universo al que pertenece luchador de StarWars
 * @param frase frase que dice el luchador de StarWars
 */
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
