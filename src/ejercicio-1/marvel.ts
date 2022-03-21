/**
 * Ejercicio 1. El combate definitivo
 * @module Pokemon
 * @author Andrea Hernández Martín
 */

 import {Fighter} from './fighter';
 import {DatosBasicos} from './fighter';
 import {Universo} from './fighter';
 
 /**
  * Clase Pokemon
  */
 export class Pokemon extends Fighter {
   /**
    * Constructor de la clase Pokemon
    * @param nombre nombre del Pokemon
    * @param peso peso del Pokemon
    * @param altura altura del Pokemon
    * @param datos datos de ataque, velocidad, defensa y hp
    * @param universo universo al que pertenece el Pokemon
    * @param frase frase que dice el Pokemon
    */
   constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
     super(nombre, peso, altura, datos, universo, frase);
   }
 }