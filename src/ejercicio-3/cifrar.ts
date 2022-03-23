/**
 * Ejercicio 3. El cifrado indescifrable
 * @module Cifrar
 * @author Andrea Hernández Martín
 */

import {Cifrado} from "./cifrado";
import {Alfabeto} from "./cifrado";

export class Cifrar extends Cifrado {
  constructor(alfabeto: Alfabeto, mensaje: string, clave: string) {
    super(alfabeto, mensaje, clave);
  }

  cifrar(): string {
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

  print(): void {
    console.log(`El mensaje ${this.mensaje} cifrado es: ${this.cifrar()}`);
  }
}

const cif = new Cifrar('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'HOLA', 'CLAVE');
cif.print();
const cif2 = new Cifrar('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'HOLA Mundo', 'CLAVE');
cif2.print();
