import 'mocha';
import {expect} from 'chai';
import {PrimeNumber} from '../src/modificacion2';

describe('Clase Prime Number', () => {
  const var1 = PrimeNumber.getprimeNumberInstance();
  const var2 = PrimeNumber.getprimeNumberInstance();
  it('Las instancias son iguales', () => {
    expect(var1 == var2).to.be.equal(true);
  });
  it('Funciona el método esPrimo', () => {
    expect(var1.esPrimo(3)).to.be.equal(true);
  });
  it('Funciona el método numPrimos', () => {
    expect(var1.numPrimos(20)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
      47, 53, 59, 61, 67, 71]);
  });
  it('Funciona el método numPrimosRango', () => {
    expect(var1.numPrimosRango(1, 40)).to.be.eql([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37]);
  });
});
