/**
 * Modificación
 * @module Modificación
 * @author Andrea Hernández Martín
 */


/**
 * Interfaz Collectable de tipo generico T
 */
interface Collectable<T> {
  addItem(newItem: T): void;
  getItem(indice: number): T;
  removeItem(indice: number): void;
  getNumberOfItems(): number;
}

/**
 * Interfaz genérica Printable
 */
interface Printable {
  print(): void;
}

/**
 * Clase abstracta PrintableCollection de tipo genérico
 */
abstract class PrintableCollection<T> implements Collectable<T>, Printable {
  /**
   * Constructor de la clase abstracta PrintableCollection
   * @param items array de valores de la clase
   */
  constructor(protected items: T[]) {
  }

  /**
   * Función que añade un item nuevo
   * @param newItem item que se añade al array de items
   */
  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  /**
   * Función que devuelve el item según el índice
   * @param indice Lugar donde se encuentra el item a buscar
   * @returns Devuleve el item que se encuentra en el lugar del índice que se especifica
   */
  getItem(indice: number): T {
    return this.items[indice];
  }

  /**
   * Función que elimina un item de la posision que se le pasa por índice
   * @param indice Posision del item a eliminar
   */
  removeItem(indice: number): void {
    this.items.splice(indice, 1);
  }

  /**
   * Función que devuelve el numero de items total que hay
   * @returns El numero de items en el array
   */
  getNumberOfItems(): number {
    return this.items.length;
  }

  /**
   * Función print abstracta
   */
  abstract print(): void;
}

/**
 * Clase NumericPrintableCollection que hereda de la clase PrintableCollection
 */
export class NumericPrintableCollection extends PrintableCollection<number> {
  /**
   * Constructror de la clase
   * @param items array de items
   */
  constructor(items: number[]) {
    super(items);
  }

  /**
   * Funcion que imprime la colección de valores numericos
   */
  print(): void {
    const it: number[] = this.items;
    const arrStr: string[] = [];
    // let result: string = '';
    it.forEach((element) => {
      arrStr.push((element.toString()));
    });
    console.log(arrStr.join(','));
  }
}

/**
 * Clase StringPrintableCollection que hereda de la clase PrintableCollection
 */
export class StringPrintableCollection extends PrintableCollection<string> {
  /**
   * Constructror de la clase
   * @param items array de items
   */
  constructor(items: string[]) {
    super(items);
  }

  /**
   * Funcion que imprime la colección de valores de string
   */
  print(): void {
    const arrStr: string[] = this.items;
    console.log(arrStr.join(','));
  }
}

const num = new NumericPrintableCollection([1, 2]);
num.print();
const str = new StringPrintableCollection(["hola", "mundo"]);
str.print();
