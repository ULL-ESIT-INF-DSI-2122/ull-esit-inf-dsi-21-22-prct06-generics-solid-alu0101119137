import 'mocha';
import {expect} from 'chai';
import {Series, Serie} from '../src/ejercicio-2/series';
import {Peliculas, Peli} from '../src/ejercicio-2/pelis';
import {Documentales, Documental} from '../src/ejercicio-2/documentales';

describe('Tests de las clases hijas de BasicStreamableCollection', () => {
  describe('Clase Series', () => {
    const LCDP: Serie = {nombre: 'La casa de papel', year: 2017, genero: 'Accion', episodios: 50, temporadas: 5};
    const Bridgerton: Serie = {nombre: 'Los Bridgerton', year: 2020, genero: 'Romance', episodios: 16, temporadas: 2};
    const OuterBanks: Serie = {nombre: 'Outer Banks', year: 2020, genero: 'Misterio', episodios: 20, temporadas: 2};
    const series: Serie[] = [];
    series.push(LCDP);
    series.push(Bridgerton);
    const coleccSeries = new Series(series);

    it('Se crea correctamente una coleccion de series', () => {
      expect(new Series(series));
    });
    it('Se añade la serie Outer Banks a la coleccion', () => {
      expect(coleccSeries.add(OuterBanks));
    });
    it('Se obtiene la coleccion de series', () => {
      expect(coleccSeries.getColeccion()).to.be.eql([LCDP, Bridgerton, OuterBanks]);
    });
    it('Se busca una serie por el nombre La Casa de Papel', () => {
      expect(coleccSeries.buscar('La casa de papel', 'nombre')).to.be.eql([LCDP]);
    });
    it('Se busca una serie por el año 2020', () => {
      expect(coleccSeries.buscar(2020, 'year')).to.be.eql([Bridgerton, OuterBanks]);
    });
    it('Se busca una serie por el genero Romance', () => {
      expect(coleccSeries.buscar('Romance', 'genero')).to.be.eql([Bridgerton]);
    });
    it('Se busca una serie por numero de temporadas 5', () => {
      expect(coleccSeries.buscar(5, 'temporadas')).to.be.eql([LCDP]);
    });
    it('Se busca una serie por duracion 100, value equal vacio', () => {
      expect(coleccSeries.buscar(100, 'duracion')).to.be.eql([]);
    });
  });

  describe('Clase Peliculas', () => {
    const proyAdam: Peli = {nombre: 'Proyecto Adam', year: 2022, genero: 'Ciencia ficcion', duracion: 106, actor: 'Ryan Reynolds', director: 'Shawn Levy'};
    const diarioNoa: Peli = {nombre: 'El diario de Noa', year: 2004, genero: 'Romance', duracion: 124, actor: 'Rachel McAdams', director: 'Nick Cassavets'};
    const insidious: Peli = {nombre: 'Insidious', year: 2010, genero: 'Terror', duracion: 103, actor: 'Patrick Wilson', director: 'James Wan'};
    const peliculas: Peli[] = [];
    peliculas.push(proyAdam);
    peliculas.push(diarioNoa);
    const coleccPeliculas = new Peliculas(peliculas);

    it('Se crea correctamente una coleccion de peliculas', () => {
      expect(new Peliculas(peliculas));
    });
    it('Se añade la pelicula Insidious a la coleccion', () => {
      expect(coleccPeliculas.add(insidious));
    });
    it('Se obtiene la coleccion de peliculas', () => {
      expect(coleccPeliculas.getColeccion()).to.be.eql([proyAdam, diarioNoa, insidious]);
    });
    it('Se busca una peli por el nombre Proyecto Adam', () => {
      expect(coleccPeliculas.buscar('Proyecto Adam', 'nombre')).to.be.eql([proyAdam]);
    });
    it('Se busca una peli por el año 2010', () => {
      expect(coleccPeliculas.buscar(2010, 'year')).to.be.eql([insidious]);
    });
    it('Se busca una peli por el genero Romance', () => {
      expect(coleccPeliculas.buscar('Romance', 'genero')).to.be.eql([diarioNoa]);
    });
    it('Se busca una peli por el actor Ryan Reynolds', () => {
      expect(coleccPeliculas.buscar('Ryan Reynolds', 'actor')).to.be.eql([proyAdam]);
    });
    it('Se busca una peli por duracion 124', () => {
      expect(coleccPeliculas.buscar(124, 'duracion')).to.be.eql([diarioNoa]);
    });
    it('Se busca una peli por director James Wan', () => {
      expect(coleccPeliculas.buscar('James Wan', 'director')).to.be.eql([insidious]);
    });
    it('Se busca una peli por temporadas 1, value equal vacio', () => {
      expect(coleccPeliculas.buscar(1, 'temmporadas')).to.be.eql([]);
    });
  });

  describe('Clase Documentales', () => {
    const titanic: Documental = {nombre: 'Titanic 20 años después', year: 2017, genero: 'Historia', duracion: 47};
    const america: Documental = {nombre: 'America contra el cambio climatico', year: 2018, genero: 'Cambio Climatico', duracion: 70};
    const vivo: Documental = {nombre: 'Vivo', year: 2021, genero: 'Vida', duracion: 80};
    const documental: Documental[] = [];
    documental.push(titanic);
    documental.push(america);
    const coleccDoc = new Documentales(documental);

    it('Se crea correctamente una coleccion de documentales', () => {
      expect(new Documentales(documental));
    });
    it('Se añade el documental Vivo a la coleccion', () => {
      expect(coleccDoc.add(vivo));
    });
    it('Se obtiene la coleccion de documentales', () => {
      expect(coleccDoc.getColeccion()).to.be.eql([titanic, america, vivo]);
    });
    it('Se busca un documental por el nombre Titanic 20 años después', () => {
      expect(coleccDoc.buscar('Titanic 20 años después', 'nombre')).to.be.eql([titanic]);
    });
    it('Se busca un documental por el año 2018', () => {
      expect(coleccDoc.buscar(2018, 'year')).to.be.eql([america]);
    });
    it('Se busca un documental por el genero Historia', () => {
      expect(coleccDoc.buscar('Historia', 'genero')).to.be.eql([titanic]);
    });
    it('Se busca un documental por duracion 80', () => {
      expect(coleccDoc.buscar(80, 'duracion')).to.be.eql([vivo]);
    });
    it('Se busca un documental por temporadas 1, value equal vacio', () => {
      expect(coleccDoc.buscar(1, 'temmporadas')).to.be.eql([]);
    });
  });
});
