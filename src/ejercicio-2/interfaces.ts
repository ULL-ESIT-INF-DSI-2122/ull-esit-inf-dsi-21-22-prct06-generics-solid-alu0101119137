/**
 * Ejercicio 2. DSIflix
 * @module Interfaces
 * @author Andrea Hernández Martín
 */

/**
 * Interfaz para una coleccion de emisiones
 */
export interface Streamable<T> {
  /**
   * Array generico de coleccion de emisiones
   */
  coleccion: T[];

  /**
   * Método que añade un programa a la colección
   * @param programa Programa que añadir
   */
  add(programa: T): void;

  /**
   * Método que retorna una colección de emisiones
   */
  getColeccion(): T[];
}

/**
 * Interfaz de búsqueda
 */
export interface Search<T> {
  /**
   * Busca los elementos según un atributo y un tipo
   * @param atributo Atributo a buscar
   * @param tipo Tipo de atributo
   */
  buscar(atributo: string, tipo: string): T[];
}
