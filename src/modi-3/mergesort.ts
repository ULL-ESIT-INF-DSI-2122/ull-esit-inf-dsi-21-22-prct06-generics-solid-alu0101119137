import {Strategy} from './interfaz';

/**
 * Clase MergeSort
 */
export class MergeSort implements Strategy {
  /**
   * Método que ordena una lista de elementos
   * @param list Lista de números a ordenar
   * @returns La lista de números ordenada
   */
  ordenar(list: number[]): number[] {
    if (list.length <= 1) {
      return list;
    }

    const list1 = list.slice(0, Math.ceil(list.length / 2));
    const list2 = list.slice(list1.length, list.length);

    return this.sortedMerge(this.ordenar(list1), this.ordenar(list2));
  }

  /**
   * Método que divide el conjunto de valores a ordenar
   * @param list1 Primer conjunto a comprobar
   * @param list2 Segundo conjunto a comprobar
   * @returns Retorna las dos listas ordenadas y juntas
   */
  sortedMerge(list1: number[], list2: number[]): number[] {
    const merged: number[] | undefined = [];
    let i: number = 0;
    let j: number = 0;

    while (i < list1.length && j < list2.length) {
      if (list1[i] <= list2[j]) {
        merged.push(list1[i]);
        i++;
      } else {
        merged.push(list2[j]);
        j++;
      }
    }
    return merged.concat(list1.slice(i).concat(list2.slice(j)));
  }
}
