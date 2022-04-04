import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/modi-3/solver';
import {BubbleSort} from '../src/modi-3/bubblesort';

describe('Tests de la clase Solver', () => {
  const mySolver = new Solver([5, 3, 2], new BubbleSort());
  it('Se crea una instancia de la clase solver con el método BubbleSort', () => {
    expect(new Solver([5, 3, 2], new BubbleSort()));
  });
  it('Se pone en funcionamiento la ordenacion', () => {
    expect(mySolver.funcionamiento()).to.be.eql([2, 3, 5]);
  });
  // it('Se modifica el tipo de ordenacion', () => {
  //   expect(mySolver.setStrategy(new ));
  // });
});
