/**
 * Ejercicio 3. El cifrado indescifrable
 * @module Decodifación
 * @author Andrea Hernández Martín
 */

import {Cifrado} from "./cifrado";
import {Alfabeto} from "./cifrado";

/**
 * Clase que decodifica un mensaje
 */
export class Decodificacion extends Cifrado {
  /**
   * Consturctor de la clase Decodificacion
   * @param alfabeto Alfabeto que se va a utilizar para la decodificacion
   * @param mensaje Mensaje que se quiere decodificar
   * @param clave Clave que se va a utilizar para decodificar el mensaje
   */
  constructor(alfabeto: Alfabeto, mensaje: string, clave: string) {
    super(alfabeto, mensaje, clave);
  }

  /**
   * Método que decodifica el mensaje según una clave
   * @returns Retorna el mensaje decodificado
   */
  decodificacion(): string {
    let msgCifrado: string = '';
    this.eliminarEspacios();
    const auxClave = this.repetirClave();
    const suma: number[] = [];

    for (let i = 0; i < this.mensaje.length; i++) {
      if (this.alfabeto.search(this.mensaje[i]) >= this.alfabeto.search(auxClave[i])) {
        suma.push((this.alfabeto.search(this.mensaje[i]) - this.alfabeto.search(auxClave[i]) - 1) % 27);
      } else {
        suma.push((this.alfabeto.search(this.mensaje[i]) - this.alfabeto.search(auxClave[i]) - 1) + 27);
      }
    }

    for (let i = 0; i < suma.length; i++) {
      msgCifrado += this.alfabeto.charAt(suma[i]);
    }
    this.mensaje = msgCifrado;
    return this.mensaje;
  }
  /**
   * Método que imprime el resultado de la decodificacion
   */
  print(): void {
    console.log(`El mensaje ${this.mensaje} decodificado es: ${this.decodificacion()}`);
  }
}

const deco1 = new Decodificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'kamw', 'clave');
deco1.print();
const deco2 = new Decodificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'kamwqxyel', 'clave');
deco2.print();
