import 'mocha';
import {expect} from 'chai';
import {Solver} from '../src/modi-3/solver';
import {BubbleSort} from '../src/modi-3/bubblesort';
import {MergeSort} from '../src/modi-3/mergesort';

describe('Tests de la clase Solver', () => {
  const mySolver = new Solver([5, 3, 2], new BubbleSort());
  const mySolver2 = new Solver([1, 3, 2, 7, 3, 5], new MergeSort());
  it('Se crea una instancia de la clase solver con el método BubbleSort', () => {
    expect(new Solver([5, 3, 2], new BubbleSort()));
  });
  it('Se pone en funcionamiento la ordenacion', () => {
    expect(mySolver.funcionamiento()).to.be.eql([2, 3, 5]);
  });
  it('Se modifica el tipo de ordenacion a MergeSort', () => {
    expect(mySolver.setStrategy(new MergeSort()));
  });
  it('Se pone en funcionamiento la ordenacion', () => {
    expect(mySolver.funcionamiento()).to.be.eql([2, 3, 5]);
  });
  it('Se crea una instancia de la clase solver con el método Mergesort', () => {
    expect(new Solver([1, 3, 2, 7, 3, 5], new MergeSort()));
  });
  it('Se pone en funcionamiento la ordenacion', () => {
    expect(mySolver2.funcionamiento()).to.be.eql([1, 2, 3, 3, 5, 7]);
  });
});
