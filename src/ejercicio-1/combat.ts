/**
 * Ejercicio 1. El combate definitivo
 * @module Combat
 * @author Andrea Hernández Martín
 */

import {DC} from './dc';
import {Fighter} from './fighter';
import {Marvel} from './marvel';

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

  /**
   * Función que calcula el daño entre el primer luchador contra el segundo
   * @param luchador1 Luchador que ataca de tipo T
   * @param luchador2 Luchador que se defiede de tipo U
   * @returns El daño causado del luchador uno al luchador 2
   */
  danio(luchador1: (T | U), luchador2: (T | U)): number {
    let efecto: number = 0;
    switch (luchador1.universo) {
      case 'marvel':
        if (luchador2.universo == 'marvel') {
          efecto = 2;
        } else if (luchador2.universo == 'pokemon') {
          efecto = 1;
        } else {
          efecto = 0.5;
        }
        break;

      case 'pokemon':
        if (luchador2.universo == 'star wars' || luchador2.universo == 'marvel') {
          efecto = 2;
        } else {
          efecto = 0.5;
        }
        break;

      case 'DC':
        if (luchador2.universo == 'DC') {
          efecto = 2;
        } else {
          efecto = 0.5;
        }
        break;

      case 'star wars':
        if (luchador2.universo == 'DC') {
          efecto = 2;
        } else if (luchador2.universo == 'marvel') {
          efecto = 0.5;
        } else {
          efecto = 1;
        }
        break;
    }

    console.log('Daño causado: ' + (50 * (luchador1.datos.ataque / luchador2.datos.defensa) * efecto).toFixed(2));
    return 50 * (luchador1.datos.ataque / luchador2.datos.defensa) * efecto;
  }

  /**
   * Función que pone en marcha el combate, simulandolo y mostrando por pantalla los datos de este
   */
  start() {
    let danio1: number = 0;
    let danio2: number = 0;

    while (danio1 <= this.luchador1.datos.hp && danio2 <= this.luchador2.datos.hp) {
      console.log(`Ataca ${this.luchador1.nombre}:`);
      console.log(`Dice la frase : ${this.luchador1.frase}:`);
      danio2 += this.danio(this.luchador1, this.luchador2);
      console.log('El valor del HP de ' + (this.luchador1.nombre) + ' = ' + (this.luchador1.datos.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.luchador2.nombre) + ' = ' + (this.luchador2.datos.hp - danio2).toFixed(2) + '\n');

      if (danio2 >= this.luchador2.datos.hp) {
        break;
      }

      console.log(`Ataca ${this.luchador2.nombre}:`);
      console.log(`Dice la frase : ${this.luchador2.frase}:`);
      danio1 += this.danio(this.luchador2, this.luchador1);
      console.log('El valor del HP de ' + (this.luchador1.nombre) + ' = ' + (this.luchador1.datos.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.luchador2.nombre) + ' = ' + (this.luchador2.datos.hp - danio2).toFixed(2) + '\n');
    }
  }
}

const ironMan = new Marvel('Iron Man', 60.5, 1.7, {ataque: 150, defensa: 150, velocidad: 100, hp: 200}, 'marvel', 'Yo soy Iron Man');
const wonderWoman = new DC('Wonder Woman', 55, 1.75, {ataque: 100, defensa: 75, velocidad: 95, hp: 100}, 'DC', '¿Por dónde se va a la guerra?');
const combate = new Combat<Marvel, DC>(ironMan, wonderWoman);
combate.start();
