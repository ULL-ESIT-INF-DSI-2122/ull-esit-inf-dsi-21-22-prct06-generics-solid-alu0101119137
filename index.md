# Desarrollo de Sistemas Informáticos
## Práctica 6. Clases e interfaces genéricas. Principios SOLID  
### Andrea Hernández Martín - alu0101119137
[Enlace a la Github Page](https://ull-esit-inf-dsi-2122.github.io/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/) 

## Introducción  
En esta práctica realizaremos 3 ejercicios en Typescript en los cuales aprenderemos a manejar sobre todo clases e interfaces genéricas. Además, utilizaremos TypeDoc para documentar el desarrollo del código implementado, así como las herramientas Mocha y Chai para incorporar desarrollo dirigipo por pruebas (TDD) o por comportamiento (BDD). Además se utilizarán las herramientas Instanbul y Coveralls para el cubrimiento del código, las cuales se utilizan mediante Gihub Actions. También se ha añadido Github Actions para la intedración continua del código fuente. Y a la hora de realizar la estructura del código se seguirán los principios SOLID.

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
Luego, para calcular el daño que hacen los luchadores se creó una función *danio*, la cual lo que hace es calcular según el universo de cada luchador el efecto que hace el ataque, y a esta se le pasan dos luchadores que pueden ser del tipo T o U cada uno de ellos, de esta forma podrán ser de cualquier universo.    
Por último, se creó la función *start* la cual simula el combate entre los dos jugadores y va mostrando por cada ataque el daño que le hace uno a otro, así como sus nombres y sus frases características.    
**Código:**
```ts
export class Combat<T extends Fighter, U extends Fighter> {

  constructor(public luchador1: T, public luchador2: U) {
  }

  danio(luchador1: T, luchador2: U): number {
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

A la hora de llevar a cabo este ejercicio, he creado una clase abstracta gérica **basicStreamableColecction**, dos interfaces genéricas **Streamable** y **Search**, y por último, creé tres clases hijas de la clase abstracta, una para cada tipo de colecciones, **Series**, **Peliculas** y **Documentales**. A continuación se comentarán detalladamente cada una de ellas.  

- **Interfaz Streamable:** esta interfaz se encarga de representar una colección de datos concreta. La interfaz cuenta con un colección de array tipo T en la que se almacenará cualquier colección de datos. Además contiene dos métodos que tendrán que implementar las clases que la implementen, estos métodos son *add* que añade un programa nuevo a la colección y *getColeccion* que devuelve la colección de datos actual que tenemos.  
**Código:**
```ts
export interface Streamable<T> {
  coleccion: T[];
  add(programa: T): void;
  getColeccion(): T[];
}
```
- **Interfaz Search:** esta interfaz se encarga de representar el método de búsqueda de una colección de datos concreta. Este método se ha separado de la interfaz mencionada anteoriormente para seguir con el principio SOLID *Interface segregation*. La interfaz cuenta un método que tendrán que implementar las clases que la implementen, este método es *buscar* el cual busca dentro de una colleción de datos el atributo que se le pasa según el tipo de búsqueda que queremos realizar, como por ejemplo, por nombre, año o género.  
**Código:**
```ts
export interface Search<T> {
  buscar(atributo: (string | number), tipo: string): T[];
}
```
- **Clase basicStreamableColecction:** esta es una clase genérica y abstracta que implementa las dos interfaces comentadas anteriormente y que se encarga de implementar los métodos *add* y *getColeccion* de la interfaz **Streamable** y luego, el método *buscar* de la interfaz **Search** lo establece como abstracto para que cada clase hija sea la que lo implemente.  
El constructor de esta clase lo que recibe como parámetros es un array de tipo T que tendrá las colecciones de datos. Luego, la función *add* lo que hace es añadirle a dicha coleccion un programa más del tipo que sea y por último, la función *getColeccion* devuelve un array con todos los programas de la colección.  
**Código:** 
```ts
export abstract class BasicStreamableCollection<T> implements Streamable<T>, Search<T> {
  constructor(public coleccion: T[]) {
  }

  add(programa: T): void {
    this.coleccion.push(programa);
  }

  getColeccion(): T[] {
    return this.coleccion;
  }

  abstract buscar(atributo: string, tipo: string): T[];
}
```
- **Clase Series**: esta clase es una clase que hereda sus parámetros y sus métodos de la clase **BasicStreamableCollection** y se encarga de almacenar una colección de series. Para ello, en primer lugar, creé un tipo de datos que contiene un objeto de la forma `type Serie = {nombre: string; year: number; genero: string; episodios: number; temporadas: number;}` y que especifica los datos de una serie. Luego, al constructor de la clase se le pasa una colección del tipo Serie creado anteriormente y por último, se implementa el método *buscar* que era abstracto en la clase padre.  
Este método recibe un atributo que queremos buscar y un tipo que es el tipo de atributo, mediante un switch comprobamos el tipo y con un bucle vamos comprobando todas las series de la colección de ese tipo que coincidan con el atributo, en caso de que coincida se guarda en el resultado final, que es un array de Serie, el cual retornará esta función. En caso de que no haya ninguna coincidencia, se retorna el array vacío y en caso de que el tipo de búsqueda no esté implentado se imprime un mensaje de error y también devuelve el array vacío.  
**Código:**
```ts
export class Series extends BasicStreamableCollection<Serie> {
  constructor(coleccion: Serie[]) {
    super(coleccion);
  }

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
```
- **Clase Peliculas**: esta clase es una clase que hereda sus parámetros y sus métodos de la clase **BasicStreamableCollection** y se encarga de almacenar una colección de peliculas, es muy parecida a la clase anterior. Para ello, en primer lugar, creé un tipo de datos que contiene un objeto de la forma `type Peli = {nombre: string; year: number; genero: string; duracion: number; actor: string; director: string;}` y que especifica los datos de una pelicula. Luego, al constructor de la clase se le pasa una colección del tipo Peli creado anteriormente y por último, se implementa el método *buscar* que era abstracto en la clase padre.  
Este método recibe un atributo que queremos buscar y un tipo que es el tipo de atributo, mediante un switch comprobamos el tipo y con un bucle vamos comprobando todas las peliculas de la colección de ese tipo que coincidan con el atributo, en caso de que coincida se guarda en el resultado final, que es un array de Peli, el cual retornará esta función. En caso de que no haya ninguna coincidencia, se retorna el array vacío y en caso de que el tipo de búsqueda no esté implentado se imprime un mensaje de error y también devuelve el array vacío.  
**Código:**
```ts
export class Peliculas extends BasicStreamableCollection<Peli> {
  constructor(coleccion: Peli[]) {
    super(coleccion);
  }

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
```
- **Clase Documentales**: esta clase es una clase que hereda sus parámetros y sus métodos de la clase **BasicStreamableCollection** y se encarga de almacenar una colección de documentales, es muy parecida a las clases anteriores. Para ello, en primer lugar, creé un tipo de datos que contiene un objeto de la forma `type Documental = {nombre: string; year: number; genero: string; duracion: number;}` y que especifica los datos de un documental. Luego, al constructor de la clase se le pasa una colección del tipo Documental creado anteriormente y por último, se implementa el método *buscar* que era abstracto en la clase padre.  
Este método recibe un atributo que queremos buscar y un tipo que es el tipo de atributo, mediante un switch comprobamos el tipo y con un bucle vamos comprobando todos los documentales de la colección de ese tipo que coincidan con el atributo, en caso de que coincida se guarda en el resultado final, que es un array de Documental, el cual retornará esta función. En caso de que no haya ninguna coincidencia, se retorna el array vacío y en caso de que el tipo de búsqueda no esté implentado se imprime un mensaje de error y también devuelve el array vacío.  
**Código:**
```ts
export class Documentales extends BasicStreamableCollection<Documental> {
  constructor(coleccion: Documental[]) {
    super(coleccion);
  }
  
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
```

### Ejercicio 3. El cifrado indescifrable  
En este ejercicio se nos pide crear un programa que codifique y decodifique un mensaje con el cifrado de César con el cambio de que el desplazamiento en vez de ser establecido por el usuario un número para todo el mensaje a codificar o decodificar, se establecerá una clave con la cual se calculará el desplazamiento de las letras del mensaje.  

Para realizar el ejercicio creé tres clases, una clase padre **Cifrado** y dos clases hijas **Codificacion** y **Decodificacion**, las cuales explicaré a continuación.  

- **Clase Cifrado:** esta es una clase abstracta que se encarga de almacenar los parámetros comunes y de calcular las funciones comunes que necesitan sus clases hijas. Los parámetros son el alfabeto que lo que hice fue un tipo de dato de la forma `type Alfabeto = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'` para tener siempre el mismo alfabeto sin que hayan errores a la hora de introducirlo, luego se le pasa el mensaje y una clave.  
A continuación, creé tres funciones que son comunes a las clases hijas, en primer lugar creé la función *eliminarEspacios* que lo que hace es eliminar los espacios y poner las letras a mayúsculas tanto del mensaje como de la clave para poder operar con ellos. En segundo lugar, creé la función *repetirClave*, la cual lo que hace es en caso de que la clave sea menor que el mensaje, repite dicha clave caracter por caracter hasta que el tamaño sea igual al del mensaje; en el caso de que la clave sea mayor que el mensaje, lo que se hace es recortar la clave de forma que nos quedaría del tamaño del mensaje. Esta función retorna la clave modificada para luego operar con ella en vez de con la que nos pasó el usuario. Por último, creé una función *print* la cual es abstracta y se implementará en cada clase hija.  
**Código:**
```ts
export abstract class Cifrado {
  constructor(public readonly alfabeto: Alfabeto, public mensaje: string, public clave: string) {
  }

  eliminarEspacios(): void {
    this.mensaje = this.mensaje.replace(/ /g, '').toUpperCase();
    this.clave = this.clave.replace(/ /g, '').toUpperCase();
  }

  repetirClave(): string {
    let auxClave: string = '';
    let contador: number = 0;
    let aux: string = '';

    // Clave más pequeña que el mensaje
    if (this.clave.length < this.mensaje.length) {
      let i: number = 0;
      while (i < this.mensaje.length) {
        if (contador >= this.clave.length) {
          contador = 0;
        } else {
          aux = this.clave.charAt(contador);
          auxClave += aux;

          contador++;
          i++;
        }
      }
    } else { // Clave mayor que el mensaje
      for (let i = 0; i < this.mensaje.length; i++) {
        auxClave += this.clave.charAt(i);
      }
    }
    return auxClave;
  }

  abstract print(): void;
}
```
- **Clase Codificacion:** esta clase hereda sus parámetros y métodos de la clase padre **Cifrado**, y se encarga de codificar un mensaje según un alfabeto y una clave, para ello se creó una función *codificacion* la cual en primer lugar utiliza los métodos *eliminarEspacios* y *repetirClave* de la clase **Cifrado** para poder operar con el resultado. Una vez eliminado los espacios y teniendo la clave del tamaño del mensaje, lo que hace es, por cada caracter de la clave y del mensaje, buscar en el alfabeto el índice del lugar de los caracteres y sumarlos entre ellos más 1, ya que las posiciones comienzan en 0, y aplicarle el módulo 27, ya que es el tamaño del alfabeto, y de esta forma se calcula el desplazamiento de la letra que queremos codificar. Una vez tenemos todos los índices de estas letras, lo único que hacemos es buscar dichos índices en el alfabeto y ya tendríamos el mensaje codificado.   
**Código:**
```ts
export class Codificacion extends Cifrado {
  constructor(alfabeto: Alfabeto, mensaje: string, clave: string) {
    super(alfabeto, mensaje, clave);
  }

  codificacion(): string {
    let msgCifrado: string = '';
    this.eliminarEspacios();
    const auxClave = this.repetirClave();
    const suma: number[] = [];

    for (let i = 0; i < this.mensaje.length; i++) {
      suma.push((this.alfabeto.search(this.mensaje[i]) + this.alfabeto.search(auxClave[i]) + 1) % 27);
    }

    for (let i = 0; i < suma.length; i++) {
      msgCifrado += this.alfabeto.charAt(suma[i]);
    }
    this.mensaje = msgCifrado;
    return this.mensaje;
  }

  print(): void {
    console.log(`El mensaje ${this.mensaje} cifrado es: ${this.codificacion()}`);
  }
}
```
- **Clase Decodificacion:** esta clase hereda sus parámetros y métodos de la clase padre **Cifrado**, y se encarga de decodificar un mensaje según un alfabeto y una clave, para ello se creó una función *decodificacion* la cual en primer lugar utiliza los métodos *eliminarEspacios* y *repetirClave* de la clase **Cifrado** para poder operar con el resultado. Una vez eliminado los espacios y teniendo la clave del tamaño del mensaje, lo que hace es, por cada caracter de la clave y del mensaje, contemplar dos casos. En primer lugar, el caso de que la posición de la letra del mensaje en el alfabeto sea mayor o igual que la de la clave, se busca en el alfabeto la resta de dichas posiciones menos 1, ya que empieza en 0 las posiciones y a esto se le aplica el módulo 27, siendo este el tamaño del alfabeto. En segundo lugar, se contempla el caso de que sea la posición de la letra del mensaje en el alfabeto sea menor que la de la clave, en este caso se hace lo mismo que en el anterior, pero en vez de aplicar el módulo 27, se suman 27 al resultado. Con estos dos casos, obtenemos los índices de las letras del mensaje codificado por lo que lo único que hacemos ahora es buscar dichos índices en el alfabeto y ya tendríamos el mensaje decodificado.  
**Código:**
```ts
export class Decodificacion extends Cifrado {
  constructor(alfabeto: Alfabeto, mensaje: string, clave: string) {
    super(alfabeto, mensaje, clave);
  }

  decodificacion(): string {
    let msgCifrado: string = '';
    this.eliminarEspacios();
    const auxClave = this.repetirClave();
    const suma: number[] = [];

    for (let i = 0; i < this.mensaje.length; i++) {
      if (this.alfabeto.search(this.mensaje[i]) >= this.alfabeto.search(auxClave[i])) {
        suma.push((this.alfabeto.search(this.mensaje[i]) - this.alfabeto.search(auxClave[i]) - 1) % 27);
      } else {
        suma.push((this.alfabeto.search(this.mensaje[i]) - this.alfabeto.search(auxClave[i]) - 1) + 27);
      }
    }

    for (let i = 0; i < suma.length; i++) {
      msgCifrado += this.alfabeto.charAt(suma[i]);
    }
    this.mensaje = msgCifrado;
    return this.mensaje;
  }

  print(): void {
    console.log(`El mensaje ${this.mensaje} cifrado es: ${this.decodificacion()}`);
  }
}
```  

## Documentación TypeDoc  
Para la documentación de los ejercicios utilicé la herramienta TypeDoc que convierte los comentarios en el código fuente de TypeScript en documentación HTML renderizada. A continuación, adjunto el enlace a la página web creada mediante TypeDoc.  
[Enlace repositorio documentacion Typedoc](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/tree/main/docs)  

## Testing  
Para la realización del testing de los ejercicios utilicé las herramientas Mocha y Chai.  
  
He realizado pruebas sobre todos los ejercicios en los cuales compruebo que los valores pasados por parámetro dan el resultado esperado o al contrario, es decir, se comprueba que no dan el resultado esperado. Para ello he creado un fichero ejercicio-n.spec.ts por cada ejercicio y he añadido algunas pruebas de todas las funciones utilizadas.  

A continuación muestro la salida en la terminal al ejecutar el test.  
```
  Tests de las clases hijas de Fighter
    ✔ Se crea la clase Marvel correctamente
    ✔ Se crea la clase DC correctamente
    ✔ Se crea la clase Pokemon correctamente
    ✔ Se crea la clase Star Wars correctamente
    ✔ Se crea la clase Pokedex correctamente
    ✔ Se crea la clase Combat correctamente
    ✔ Se simula un combate entre varios universos
    ✔ Se calcula el daño entre dos luchadores correctamente

  Tests de las clases hijas de BasicStreamableCollection
    Clase Series
      ✔ Se crea correctamente una coleccion de series
      ✔ Se añade la serie Outer Banks a la coleccion
      ✔ Se obtiene la coleccion de series
      ✔ Se busca una serie por el nombre La Casa de Papel
      ✔ Se busca una serie por el año 2020
      ✔ Se busca una serie por el genero Romance
      ✔ Se busca una serie por numero de temporadas 5
No esta disponible el método de búsqueda que especifica
      ✔ Se busca una serie por duracion 100, value equal vacio
    Clase Peliculas
      ✔ Se crea correctamente una coleccion de peliculas
      ✔ Se añade la pelicula Insidious a la coleccion
      ✔ Se obtiene la coleccion de peliculas
      ✔ Se busca una peli por el nombre Proyecto Adam
      ✔ Se busca una peli por el año 2010
      ✔ Se busca una peli por el genero Romance
      ✔ Se busca una peli por el actor Ryan Reynolds
      ✔ Se busca una peli por duracion 124
      ✔ Se busca una peli por director James Wan
No esta disponible el método de búsqueda que especifica
      ✔ Se busca una peli por temporadas 1, value equal vacio
    Clase Documentales
      ✔ Se crea correctamente una coleccion de documentales
      ✔ Se añade el documental Vivo a la coleccion
      ✔ Se obtiene la coleccion de documentales
      ✔ Se busca un documental por el nombre Titanic 20 años después
      ✔ Se busca un documental por el año 2018
      ✔ Se busca un documental por el genero Historia
      ✔ Se busca un documental por duracion 80
No esta disponible el método de búsqueda que especifica
      ✔ Se busca un documental por temporadas 1, value equal vacio

  Tests de la clases hijas de Cifrado
    ✔ Se puede crear una clase Codificacion correctamente
    ✔ Se codifica el mensaje hola mundo correctamente, value equal KAMWQXYEL
    ✔ Se puede crear una clase Decodificacion correctamente
    ✔ Se decodifica el mensaje KAMWQXYEL correctamente, value equal HOLA MUNDO
    ✔ Se repite la clave correctamente, value equal CLAVCLAV

  Test de la clase NumericPrintableCollection
    ✔ Se crea correctamente la clase NumericPrintableCollection
    ✔ Se añade correctamente un item
    ✔ Se obtiene un item segun una posicion correctamente
    ✔ Se elimina un item segun una posicion correctamente
    ✔ Se obtiene el número total de items correctamente
1,5,4
    ✔ Se imprime el conjunto de items correctamente

  45 passing (41ms)
```

## Coveralls y Github Actions
[![Coverage Status](https://coveralls.io/repos/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/badge.svg?branch=main)](https://coveralls.io/github/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137?branch=main)
[![Tests](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/actions/workflows/node.js.yml/badge.svg)](https://github.com/ULL-ESIT-INF-DSI-2122/ull-esit-inf-dsi-21-22-prct06-generics-solid-alu0101119137/actions/workflows/node.js.yml)  

## Conclusiones  
Esta práctica me ha resultado más sencilla que la anterior, debido a que he sabido realizar todos los ejercicios sin muchos inconvenientes. El ejercicio 3 es el que me pareció más interesante debido a la temática codificación y decodificación que me gusta  bastante. En cuanto a la parte de documentación y testing al haberla realizado en todas las prácticas anteriores no me ha supuesto ningún inconveniente. También he añadido la herramienta instanbul y coveralls, las cuales me han parecido bastante interesantes y útiles, y tampoco he tenido dificultades al utilizarlas gracias al vídeo tutorial que se nos proporcionó.

## Bibliografía  
- [Guión de la práctica](https://ull-esit-inf-dsi-2122.github.io/prct06-generics-solid/)
- [Documentación TypeDoc](https://typedoc.org/)
- [Documentación Mocha](https://mochajs.org/)
- [Documentación Chai](https://www.chaijs.com/)
- [Documentación Instanbul](https://istanbul.js.org/)
- [Documentación Coveralls](https://coveralls.io/)
- [Apuntes de clase sobre clases e interfaces genéricas.](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-generics.html)
- [Apuntes de clase sobre principios SOLID](https://ull-esit-inf-dsi-2122.github.io/typescript-theory/typescript-solid.html)
