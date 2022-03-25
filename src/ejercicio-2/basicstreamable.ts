/**
 * Ejercicio 2. DSIflix
 * @module BasicStreamableCollection
 * @author Andrea Hernández Martín
 */

import {Streamable, Search} from './interfaces';

/**
 * Clase abstracta genérica BasicStreamableCollection
 */
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Search<T> {
  /**
   * Constructor de la clase BasicStreamableCollection
   * @param coleccion Array de colección de datos de una emisión
   */
  constructor(public coleccion: T[]) {
  }

  /**
   * Añade un programa a la colección
   * @param programa Programa a añadir
   */
  add(programa: T): void {
    this.coleccion.push(programa);
  }

  /**
   * Obtiene la coleccion
   * @returns Retorna el array de colecciones
   */
  getColeccion(): T[] {
    return this.coleccion;
  }

  /**
   * Método abstracto que busca en una colección que se implementará en cada clase hija
   * @param atributo Atributo que queremos encontrar
   * @param tipo Tipo de atributo
   */
  abstract buscar(atributo: string, tipo: string): T[];
}
