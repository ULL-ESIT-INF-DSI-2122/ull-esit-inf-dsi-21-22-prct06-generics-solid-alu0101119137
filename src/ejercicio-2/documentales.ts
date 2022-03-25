/**
 * Ejercicio 2. DSIflix
 * @module Documentales
 * @author Andrea Hernández Martín
 */

import {BasicStreamableCollection} from './basicstreamable';

/**
 * @type {Documental} Tipo de datos que almacena un objeto con las características de un documental
 */
type Documental = {
  nombre: string;
  year: number;
  genero: string;
  duracion: number;
}

/**
 * Clase Documentales almacena una colección de documentales
 */
export class Documentales extends BasicStreamableCollection<Documental> {
  /**
 * Constructor de la clase documentales
 * @param coleccion Array de colecciones de documentales
 */
  constructor(coleccion: Documental[]) {
    super(coleccion);
  }

  /**
 * Método de busqueda de un documental
 * @param atributo Atributo que queremos buscar
 * @param tipo Tipo de atributo
 * @returns retorna todos los documentales que cumplan la búsqueda
 */
  buscar(atributo: (string | number), tipo: string): Documental[] {
    const result: Documental[] = [];

    switch (tipo) {
      case 'nombre':
        this.coleccion.forEach((element) => {
          if (element.nombre == atributo) {
            result.push(element);
          }
        });
        break;

      case 'year':
        this.coleccion.forEach((element) => {
          if (element.year == atributo) {
            result.push(element);
          }
        });
        break;

      case 'genero':
        this.coleccion.forEach((element) => {
          if (element.genero == atributo) {
            result.push(element);
          }
        });
        break;

      case 'duracion':
        this.coleccion.forEach((element) => {
          if (element.duracion == atributo) {
            result.push(element);
          }
        });
        break;

      default:
        console.log('No esta disponible el método de búsqueda que especifica');
        break;
    }
    return result;
  }
}

const titanic: Documental = {nombre: 'Titanic 20 años después', year: 2017, genero: 'Historia', duracion: 47};
const america: Documental = {nombre: 'America contra el cambio climatico', year: 2018, genero: 'Cambio Climatico', duracion: 70};

const documental: Documental[] = [];
documental.push(titanic);
documental.push(america);

const coleccionPeliculas = new Documentales(documental);
console.log(coleccionPeliculas.buscar(2017, 'year'));

