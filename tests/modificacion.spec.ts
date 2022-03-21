import 'mocha';
import {expect} from 'chai';
import {NumericPrintableCollection} from '../src/modificacion';
// import {StringPrintableCollection} from '../src/modificacion';

describe('Test de la clase NumericPrintableCollection', () => {
  const miColeccion = new NumericPrintableCollection([1, 3, 5]);

  it('Se crea correctamente la clase NumericPrintableCollection', () => {
    expect(new NumericPrintableCollection([1, 3, 5]));
  });
  it('Se añade correctamente un item', () => {
    expect(miColeccion.addItem(4));
  });
  it('Se obtiene un item segun una posicion correctamente', () => {
    expect(miColeccion.getItem(1)).to.be.equal(3);
  });
  it('Se elimina un item segun una posicion correctamente', () => {
    expect(miColeccion.removeItem(1));
  });
  it('Se obtiene el número total de items correctamente', () => {
    expect(miColeccion.getNumberOfItems()).to.be.equal(3);
  });
  it('Se imprime el conjunto de items correctamente', () => {
    expect(miColeccion.print());
  });
});


// describe('Test de la clase NumericPrintableCollection', () => {
//   const miColeccion = new NumericPrintableCollection([1, 3, 5]);

//   it('Se crea correctamente la clase NumericPrintableCollection', () => {
//     expect(new NumericPrintableCollection([1, 3, 5]));
//   });
//   it('Se añade correctamente un item', () => {
//     expect(miColeccion.addItem(4));
//   });
//   it('Se obtiene un item segun una posicion correctamente', () => {
//     expect(miColeccion.getItem(1)).to.be.equal(3);
//   });
//   it('Se elimina un item segun una posicion correctamente', () => {
//     expect(miColeccion.removeItem(1));
//   });
//   it('Se obtiene el número total de items correctamente', () => {
//     expect(miColeccion.getNumberOfItems()).to.be.equal(3);
//   });
//   it('Se imprime el conjunto de items correctamente', () => {
//     expect(miColeccion.print());
//   });
// });
