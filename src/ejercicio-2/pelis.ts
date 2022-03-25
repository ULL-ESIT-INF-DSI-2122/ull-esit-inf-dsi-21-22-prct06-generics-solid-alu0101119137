/**
 * Ejercicio 2. DSIflix
 * @module Peliculas
 * @author Andrea Hernández Martín
 */

import {BasicStreamableCollection} from './basicstreamable';

/**
* @type {Peli} Tipo de datos que almacena un objeto con las características de una pelicula
*/
type Peli = {
  nombre: string;
  year: number;
  genero: string;
  duracion: number;
  actor: string;
  director: string;
}

/**
* Clase Peliculas almacena una colección de peliculas
*/
export class Peliculas extends BasicStreamableCollection<Peli> {
  /**
  * Constructor de la clase peliculas
  * @param coleccion Array de colecciones de peliculas
  */
  constructor(coleccion: Peli[]) {
    super(coleccion);
  }

  /**
  * Método de busqueda de una pelicula
  * @param atributo Atributo que queremos buscar
  * @param tipo Tipo de atributo
  * @returns retorna todas las peliculas que cumplan la búsqueda
  */
  buscar(atributo: (string | number), tipo: string): Peli[] {
    const result: Peli[] = [];

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

      case 'actor':
        this.coleccion.forEach((element) => {
          if (element.actor == atributo) {
            result.push(element);
          }
        });
        break;

      case 'director':
        this.coleccion.forEach((element) => {
          if (element.director == atributo) {
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

const proyAdam: Peli = {nombre: 'Proyecto Adam', year: 2022, genero: 'Ciencia ficcion', duracion: 106, actor: 'Ryan Reynolds', director: 'Shawn Levy'};
const diarioNoa: Peli = {nombre: 'El diario de Noa', year: 2004, genero: 'Romance', duracion: 124, actor: 'Rachel McAdams', director: 'Nick Cassavets'};

const peliculas: Peli[] = [];
peliculas.push(proyAdam);
peliculas.push(diarioNoa);

const coleccionPeliculas = new Peliculas(peliculas);
console.log(coleccionPeliculas.buscar('Romance', 'genero'));

