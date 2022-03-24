import 'mocha';
import {expect} from 'chai';
import {Codificacion} from '../src/ejercicio-3/codificacion';
import {Decodificacion} from '../src/ejercicio-3/decodificacion';

describe('Tests de la clases hijas de Cifrado', () => {
  const cod = new Codificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'Hola mundo', 'Clave');
  const decod = new Decodificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'KAMWQXYEL', 'Clave');

  it('Se puede crear una clase Codificacion correctamente', () => {
    expect(new Codificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'Hola mundo', 'Clave'));
  });
  it('Se codifica el mensaje hola mundo correctamente, value equal KAMWQXYEL', () => {
    expect(cod.codificacion()).to.be.equal('KAMWQXYEL');
  });
  it('Se puede crear una clase Decodificacion correctamente', () => {
    expect(new Decodificacion('ABCDEFGHIJKLMNÑOPQRSTUVWXYZ', 'KAMWQXYEL', 'Clave'));
  });
  it('Se decodifica el mensaje KAMWQXYEL correctamente, value equal HOLA MUNDO', () => {
    expect(decod.decodificacion()).to.be.equal('HOLAMUNDO');
  });
  it('Se repite la clave correctamente, value equal CLAVCLAV', () => {
    expect(decod.repetirClave()).to.be.equal('CLAVECLAV');
  });
});
