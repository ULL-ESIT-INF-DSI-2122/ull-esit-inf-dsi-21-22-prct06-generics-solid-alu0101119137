/**
 * Ejercicio 1. El combate definitivo
 * @module Pokedex
 * @author Andrea Hernández Martín
 */

import {Fighter} from "./fighter";
import {Marvel} from "./marvel";
import {DC} from "./dc";

export class Pokedex {
  constructor(luchadores: Fighter[]) {
    luchadores.forEach((element) => {
      console.log(element);
    });
  }
}

const ironMan = new Marvel('Iron Man', 60.5, 1.7, {ataque: 150, defensa: 150, velocidad: 100, hp: 200}, 'marvel', 'Yo soy Iron Man');
const wonderWoman = new DC('Wonder Woman', 55, 1.75, {ataque: 100, defensa: 75, velocidad: 95, hp: 100}, 'DC', '¿Por dónde se va a la guerra?');
new Pokedex([ironMan, wonderWoman]);
