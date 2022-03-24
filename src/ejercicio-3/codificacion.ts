/**
 * Ejercicio 3. El cifrado indescifrable
 * @module Codificacion
 * @author Andrea Hernández Martín
 */

import {Cifrado} from "./cifrado";
import {Alfabeto} from "./cifrado";

/**
 * Clase que codifica un mensaje
 */
export class Codificacion extends Cifrado {
  /**
   * Consturctor de la clase Codificacion
   * @param alfabeto Alfabeto que se va a utilizar para la codificacion
   * @param mensaje Mensaje que se quiere codificar
   * @param clave Clave que se va a utilizar para codificar el mensaje
   */
  constructor(alfabeto: Alfabeto, mensaje: string, clave: string) {
    super(alfabeto, mensaje, clave);
  }
  /**
   * Método que codifica el mensaje según una clave
   * @returns Retorna el mensaje codificado
   */
  codificacion(): string {
    let msgCifrado: string = '';
    this.eliminarEspacios();
    const auxClave = this.repetirClave();
    const suma: number[] = [];

    for (let i = 0; i < this.mensaje.length; i++) {
      suma.push((this.alfabeto.search(this.mensaje[i]) + this.alfabeto.search(auxClave[i]) + 1) % 27);
    }

    for (let i = 0; i < suma.length; i++) {
      msgCifrado += this.alfabeto.charAt(suma[i]);
    }
    this.mensaje = msgCifrado;
    return this.mensaje;
  }

  /**
   * Método que imprime el resultado de la codificacion
   */
  print(): void {
    console.log(`El mensaje ${this.mensaje} codificacdo es: ${this.codificacion()}`);
  }
}

const cif = new Codificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'HOLA', 'CLAVE');
cif.print();
const cif2 = new Codificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'Hola Mundo', 'CLAVE');
cif2.print();
