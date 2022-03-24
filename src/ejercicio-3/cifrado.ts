/**
 * Ejercicio 3. El cifrado indescifrable
 * @module Cifrado
 * @author Andrea Hernández Martín
 */

/**
 * @type {Alfabeto} El alfabeto del cifrado a usar
 */
export type Alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';

/**
 * Clase abstracta Cifrado
 */
export abstract class Cifrado {
  /**
   * Constructor de la clase abstracta Cifrado
   * @param alfabeto Alfabeto a utilizar para cifrar y descifrar
   * @param mensaje Mensaje a cifrar y descifrar
   * @param clave Clave con la que queremos cifrar y descifrar
   */
  constructor(public readonly alfabeto: Alfabeto, public mensaje: string, public clave: string) {
  }

  /**
   * Función que elimina los espacios del mensaje y la clave, y además pone sus letras a mayúsculas
   */
  eliminarEspacios(): void {
    this.mensaje = this.mensaje.replace(/ /g, '').toUpperCase();
    this.clave = this.clave.replace(/ /g, '').toUpperCase();
  }

  /**
   * Función que repite la clave en caso de que sea el mensaje a cifrar mayor o la recorta en caso de que sea menor
   * @returns Retorna la clave con el mismo tamaño que el mensaje a cifrar
   */
  repetirClave(): string {
    let auxClave: string = '';
    let contador: number = 0;
    let aux: string = '';

    // Clave más pequeña que el mensaje
    if (this.clave.length < this.mensaje.length) {
      let i: number = 0;
      while (i < this.mensaje.length) {
        if (contador >= this.clave.length) {
          contador = 0;
        } else {
          aux = this.clave.charAt(contador);
          auxClave += aux;

          contador++;
          i++;
        }
      }
    } else { // Clave mayor que el mensaje
      for (let i = 0; i < this.mensaje.length; i++) {
        auxClave += this.clave.charAt(i);
      }
    }
    return auxClave;
  }

  /**
   * Método abstracto que se tendrá que implementar en las clases hijas
   */
  abstract print(): void;
}


