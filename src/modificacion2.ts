/**
 * Modificacion números primos. Clase singleton
 * @author Andrea Hernández Martín
 */


export class PrimeNumber {
  private static primeNumberInstance: PrimeNumber;

  /**
   * Constructor privado de la clase PrimeNumber
   */
  private constructor() {
  }

  /**
   * Metodo estatico que accede al contructor de la clase si la instancia no está creada
   */
  public static getprimeNumberInstance(): PrimeNumber {
    if (!PrimeNumber.primeNumberInstance) {
      PrimeNumber.primeNumberInstance = new PrimeNumber();
    }
    return PrimeNumber.primeNumberInstance;
  }

  /** Metodo que comprueba si un numero es primo */
  esPrimo(num: number): boolean {
    if (num == 1) {
      return false;
    }
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return true;
  }

  /**
   * Retorna los primeros numeros primos
   * @param num los n primeros numeros a retornar
   * @returns array con todos los numeros primos
   */
  numPrimos(num: number): number[] {
    const primos: number[] = [];
    for (let i = 1; i < num; i++) {
      if (this.esPrimo(i)) {
        primos.push(i);
      }
    }
    return primos;
  }

  /**
   * Rango de numeros primos
   * @param n desde donde empieza el rango
   * @param m donde termina el rango
   */
  numPrimosRango(n: number, m: number): number[] {
    const primos: number[] = [];
    for (let i = n; i <= m; i++) {
      if (this.esPrimo(i)) {
        primos.push(i);
      }
    }
    return primos;
  }
}

const prim = PrimeNumber.getprimeNumberInstance();
console.log(prim.numPrimos(20));
console.log(prim.numPrimosRango(1, 40));
