# Desarrollo de Sistemas Informáticos
## Práctica 5. Objetos, clases e interfaces  
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/) 

## Introducción  
En esta práctica realizaremos 3 ejercicios en Typescript en los cuales aprenderemos a manejar sobre todo clases e interfaces genéricas. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD). Además se utilizarán las herramientas Instanbul y Coveralls para el cubrimiento del código. Y a la hora de realizar la estructura del código se seguirán los principios SOLID.

## Ejercicios
### Ejercicio 1. El combate definitivo  
En este ejercicio se nos pide crear un programa que permita simular un combate entre varios luchadores de varios universos, como Marvel, DC, Star Wars o Pokemon. Además de crear una clase que almacene los datos de todos los luchadores independientemente del universo que sean.  

Para la realización de este ejercicio en primer lugar creé una clase **Fighter** la cual es la encargada de que un luchador pueda combatir y esta clase será de la que hereden las otras clases. A continuación, para cada universo creé una clase distinta (marvel, dc, pokemon y starWars) las cuales heredan de **Fighter** y son prácticamente iguales entre ellas; También creé una clase a parte **Combat** y por útlimo, creé la clase **Pokedex**. Ahora se comentarán en profundidad cada una.  

- **Clase Fighter:** esta es una clase abstracta la cual es la encargada de representar a un luchador. Para ello, tiene que almacenar unos datos básicos, los cuales son el nombre, la altura, el peso, los datos que almacena los valores básicos de la lucha de cada luchador que es un tipo de datos que contiene un objeto de la forma `type DatosBasicos = {ataque: number; defensa: number; velocidad: number; hp: number;}`, el universo que es otro tipo de datos de la forma `type Universo = 'marvel' | 'pokemon' | 'DC' | 'star wars'` que contiene los tipos de universos que podemos tener y por último, la frase que es una frase característica de cada luchador.  
**Código:**
```ts
export abstract class Fighter {
  constructor(public readonly nombre: string, public readonly peso: number, public readonly altura: number, public readonly datos: DatosBasicos, public readonly universo: Universo, public readonly frase: string) {
  }
}
```
- **Clase Marvel:** esta clase hereda los atributos de la clase **Fighter** y es la encargada de crear personjes el mundo de Marvel, como por ejemplo Iron Man o la Viuda Negra, con los atributos ya explicados en la clase padre.  
**Código:**
```ts
export class Marvel extends Fighter {
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
```
- **Clase DC:** esta clase hereda los atributos de la clase **Fighter** y es la encargada de crear personjes el mundo de DC, como por ejemplo Batman o Wonder Woman, con los atributos ya explicados en la clase padre.  
**Código:**
```ts
export class DC extends Fighter {
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
```
- **Clase Pokemon:** esta clase hereda los atributos de la clase **Fighter** y es la encargada de crear personjes el mundo de Pokemon, como por ejemplo Pikachu u Onix, con los atributos ya explicados en la clase padre.  
**Código:**
```ts
export class Pokemon extends Fighter {
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
```
- **Clase StarWars:** esta clase hereda los atributos de la clase **Fighter** y es la encargada de crear personjes el mundo de Star Wars, como por ejemplo Yoda o Darth Vader, con los atributos ya explicados en la clase padre.  
**Código:**
```ts
export class StarWars extends Fighter {
  constructor(nombre: string, peso: number, altura: number, datos: DatosBasicos, universo: Universo, frase: string) {
    super(nombre, peso, altura, datos, universo, frase);
  }
}
```
- **Clase Combat:** esta clase es a encargada de simular el combate entre dos luchadores, que estos pueden ser tanto de distintos universos como del mismo. Para ello, la clase esta restringida con dos parámetros genéricos de tipo Fighter y a la cual se le pasan dos luchadores de ese tipo.  
Luego, para calcular el daño que hacen los luchadores se crearon dos funciones *danio1a2* y *danio2a1*, las cuales hacen prácticamente lo mismo, que es calcular según el universo de cada luchador el efecto que hace el ataque, pero son diferentes por el parámetro que se le pasa a cada una, ya que a una se le pasa en primer lugar el parámetro tipo T y luego el tipo U, y la otra función es viceversa, para poder hacer ataques con los dos luchadores.  
Por último, se creó la función *start* la cual simula el combate entre los dos jugadores y va mostrando por cada ataque el daño que le hace uno a otro, así como sus nombres y sus frases características.    
**Código:**
```ts
export class Combat<T extends Fighter, U extends Fighter> {

  constructor(public luchador1: T, public luchador2: U) {
  }

  danio1a2(luchador1: T, luchador2: U): number {
    let efecto: number = 0;
    switch (luchador1.universo) {
      case 'marvel':
        if (luchador2.universo == 'marvel') {
          efecto = 2;
        } else if (luchador2.universo == 'pokemon') {
          efecto = 1;
        } else {
          efecto = 0.5;
        }
        break;

      case 'pokemon':
        if (luchador2.universo == 'star wars' || luchador2.universo == 'marvel') {
          efecto = 2;
        } else {
          efecto = 0.5;
        }
        break;

      case 'DC':
        if (luchador2.universo == 'DC') {
          efecto = 2;
        } else {
          efecto = 0.5;
        }
        break;

      case 'star wars':
        if (luchador2.universo == 'DC') {
          efecto = 2;
        } else if (luchador2.universo == 'marvel') {
          efecto = 0.5;
        } else {
          efecto = 1;
        }
        break;
    }

    console.log('Daño causado: ' + (50 * (luchador1.datos.ataque / luchador2.datos.defensa) * efecto).toFixed(2));
    return 50 * (luchador1.datos.ataque / luchador2.datos.defensa) * efecto;
  }

  start() {
    let danio1: number = 0;
    let danio2: number = 0;

    while (danio1 <= this.luchador1.datos.hp && danio2 <= this.luchador2.datos.hp) {
      console.log(`Ataca ${this.luchador1.nombre}:`);
      console.log(`Dice la frase : ${this.luchador1.frase}:`);
      danio2 += this.danio1a2(this.luchador1, this.luchador2);
      console.log('El valor del HP de ' + (this.luchador1.nombre) + ' = ' + (this.luchador1.datos.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.luchador2.nombre) + ' = ' + (this.luchador2.datos.hp - danio2).toFixed(2) + '\n');

      if (danio2 >= this.luchador2.datos.hp) {
        break;
      }

      console.log(`Ataca ${this.luchador2.nombre}:`);
      console.log(`Dice la frase : ${this.luchador2.frase}:`);
      danio1 += this.danio2a1(this.luchador2, this.luchador1);
      console.log('El valor del HP de ' + (this.luchador1.nombre) + ' = ' + (this.luchador1.datos.hp - danio1).toFixed(2));
      console.log('El valor del HP de ' + (this.luchador2.nombre) + ' = ' + (this.luchador2.datos.hp - danio2).toFixed(2) + '\n');
    }
  }
}
```
- **Clase Pokedex:** esta clase es la encargada de almacenar todos los datos de los luchadores de todos los universos en una Pokedex. Para ello lo único que hace es recibir en el constructor un array de Fighter, de manera que se podrá intruducir cualquier luchador de cualquier mundo en dicha Pokedex.  
**Código:**
```ts
export class Pokedex {
  constructor(private luchadores: Fighter[]) {
  }
}
```

### Ejercicio 2. DSIflix  
Para este ejercicio se nos pide crear un modelo de datos de una plataforma de streaming como Netflix o HBO, esta plataforma podrá contener series, películas y documentales, por lo que tendremos que tener un catálogo desde el que podamos acceder a ellos.  

### Ejercicio 3. El cifrado indescifrable  
En este ejercicio se nos pide crear un programa que codifique y decodifique un mensaje con el cifrado de César con el cambio de que el desplazamiento en vez de ser establecido por el usuario un número para todo el mensaje a codificar o decodificar, se establecerá una clave con la cual se calculará el desplazamiento de las letras del mensaje.  

