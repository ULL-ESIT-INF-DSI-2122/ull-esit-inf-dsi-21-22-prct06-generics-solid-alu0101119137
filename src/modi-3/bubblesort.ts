import {Strategy} from './interfaz';

/**
 * Clase BubbleSort
 */
export class BubbleSort implements Strategy {
  /**
   * Método que ordena una lista de elementos
   * @param list Lista de números a ordenar
   * @returns La lista de números ordenada
   */
  ordenar(list: number[]): number[] {
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (list[j] > list[j + 1]) {
          const swap = list[j];
          list[j] = list[j + 1];
          list[j + 1] = swap;
        }
      }
    }
    return list;
  }
}
