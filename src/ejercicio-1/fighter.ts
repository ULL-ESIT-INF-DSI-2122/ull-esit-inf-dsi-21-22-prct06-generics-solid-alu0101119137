/**
 * Ejercicio 1. El combate definitivo
 * @module Fighter
 * @author Andrea Hernández Martín
 */

/**
 * @type {DatosBasicos} Tipo de dato que almacena datos del luchador
 */
export type DatosBasicos = {
  ataque: number;
  defensa: number;
  velocidad: number;
  hp: number;
}

/**
 * @type {Universo} Universo al que pertenece el luchador
 */
export type Universo = 'marvel' | 'pokemon' | 'DC' | 'star wars';

/**
 * @brief Clase abstracta Fighter que crea un luchador
 */
export abstract class Fighter {
  /**
   * Constructor de la clase Fighter
   * @param nombre nombre del luchador
   * @param peso peso del luchador
   * @param altura altura del luchador
   * @param datos datos de ataque, velocidad, defensa y hp
   * @param universo universo al que pertenece el luchador
   * @param frase frase que dice el luchador
   */
  constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number,
    public readonly datos: DatosBasicos, public readonly universo: Universo, public readonly frase: string) {
  }
}
