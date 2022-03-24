import 'mocha';
import {expect} from 'chai';
import {Marvel} from '../src/ejercicio-1/marvel';
import {DC} from '../src/ejercicio-1/dc';
import {Pokemon} from '../src/ejercicio-1/pokemon';
import {StarWars} from '../src/ejercicio-1/star_wars';
import {Pokedex} from '../src/ejercicio-1/pokedex';
import {Combat} from '../src/ejercicio-1/combat';


describe('Tests de las clases hijas de Fighter', () => {
  const ironMan = new Marvel('Iron Man', 60.5, 1.7, {ataque: 150, defensa: 150, velocidad: 100, hp: 200}, 'marvel', 'Yo soy Iron Man');
  const wonderWoman = new DC('Wonder Woman', 55, 1.75, {ataque: 100, defensa: 75, velocidad: 95, hp: 100}, 'DC', '¿Por dónde se va a la guerra?');
  const pikachu = new Pokemon('Pikachu', 10.2, 0.35, {ataque: 50, defensa: 75, velocidad: 120, hp: 95}, 'pokemon', 'Pika Pika Chuuuuu');
  const darthVader = new StarWars('Darth Vader.', 80.5, 1.9, {ataque: 70, defensa: 75, velocidad: 70, hp: 95}, 'star wars', 'Yo soy tu padre');

  it('Se crea la clase Marvel correctamente', () => {
    expect(new Marvel('Iron Man', 60.5, 1.7, {ataque: 150, defensa: 150, velocidad: 100, hp: 200}, 'marvel', 'Yo soy Iron Man'));
  });
  it('Se crea la clase DC correctamente', () => {
    expect(new DC('Wonder Woman', 55, 1.75, {ataque: 100, defensa: 75, velocidad: 95, hp: 100}, 'DC', '¿Por dónde se va a la guerra?'));
  });
  it('Se crea la clase Pokemon correctamente', () => {
    expect(new Pokemon('Pikachu', 10.2, 0.35, {ataque: 50, defensa: 75, velocidad: 120, hp: 95}, 'pokemon', 'Pika Pika Chuuuuu'));
  });
  it('Se crea la clase Star Wars correctamente', () => {
    expect(new StarWars('Darth Vader.', 80.5, 1.9, {ataque: 70, defensa: 75, velocidad: 70, hp: 95}, 'star wars', 'Yo soy tu padre'));
  });
  it('Se crea la clase Pokedex correctamente', () => {
    expect(new Pokedex([ironMan, wonderWoman, pikachu, darthVader]));
  });
  it('Se crea la clase Combat correctamente', () => {
    expect(new Combat<Marvel, DC>(ironMan, wonderWoman));
  });
  it('Se simula un combate entre varios universos', () => {
    const combat1 = new Combat<Marvel, DC>(ironMan, wonderWoman);
    const combat2 = new Combat<DC, Pokemon>(wonderWoman, pikachu);
    const combat3 = new Combat<StarWars, Marvel>(darthVader, ironMan);
    const combat4 = new Combat<Pokemon, StarWars>(pikachu, darthVader);
    expect(combat1.start);
    expect(combat2.start);
    expect(combat3.start);
    expect(combat4.start);
  });
  it('Se calcula el daño entre dos luchadores correctamente', () => {
    const combat1 = new Combat<Marvel, DC>(ironMan, wonderWoman);
    const combat2 = new Combat<DC, Pokemon>(wonderWoman, pikachu);
    expect(combat1.danio);
    expect(combat2.danio);
  });
});
