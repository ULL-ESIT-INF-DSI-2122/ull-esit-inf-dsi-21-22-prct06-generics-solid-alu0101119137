/**
 * Interfaz común para cada clase de la estrategia
 */
export interface Strategy {
  /**
   * Método que ordena una lista de números
   * @param list Lista a ordenar
   */
  ordenar(list: number[]): number[];
}
