import {Strategy} from './interfaz';

/**
 * Clase Solver
 */
export class Solver {
  /**
   * Constructor de la clase
   * @param list lista de números
   * @param strategy estrategia que queremos usar
   */
  constructor(private list: number[], private strategy: Strategy) {

  }

  /**
   * Establecer otra estrategia
   * @param strategy Estratgia nueva
   */
  setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  /**
   * Se llama al método de la interfaz
   */
  funcionamiento(): number[] {
    return this.strategy.ordenar(this.list);
  }
}
