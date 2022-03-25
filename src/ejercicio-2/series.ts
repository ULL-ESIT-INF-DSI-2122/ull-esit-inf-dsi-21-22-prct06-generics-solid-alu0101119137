/**
 * Ejercicio 2. DSIflix
 * @module Series
 * @author Andrea Hernández Martín
 */

import {BasicStreamableCollection} from './basicstreamable';

/**
 * @type {Serie} Tipo de datos que almacena un objeto con las características de una serie
 */
export type Serie = {
  nombre: string;
  year: number;
  genero: string;
  episodios: number;
  temporadas: number;
}

/**
 * Clase Series almacena una colección de series
 */
export class Series extends BasicStreamableCollection<Serie> {
  /**
   * Constructor de la clase serie
   * @param coleccion Array de colecciones de series
   */
  constructor(coleccion: Serie[]) {
    super(coleccion);
  }

  /**
   * Método de busqueda de una serie
   * @param atributo Atributo que queremos buscar
   * @param tipo Tipo de atributo
   * @returns retorna todas las series que cumplan la búsqueda
   */
  buscar(atributo: (string | number), tipo: string): Serie[] {
    const result: Serie[] = [];

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

      case 'episodios':
        this.coleccion.forEach((element) => {
          if (element.episodios == atributo) {
            result.push(element);
          }
        });
        break;

      case 'temporadas':
        this.coleccion.forEach((element) => {
          if (element.temporadas == atributo) {
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

const LCDP: Serie = {nombre: 'La casa de papel', year: 2017, genero: 'Accion', episodios: 50, temporadas: 5};
const Bridgerton: Serie = {nombre: 'Los Bridgerton', year: 2020, genero: 'Romance', episodios: 16, temporadas: 2};

const series: Serie[] = [];
series.push(LCDP);
series.push(Bridgerton);

const coleccionSeries = new Series(series);
console.log(coleccionSeries.buscar(50, 'episodios'));
