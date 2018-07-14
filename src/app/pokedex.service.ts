import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from 'angularfire2/firestore';
import { PokeRespuestas } from './poke-respuestas';

@Injectable()
export class PokedexService {
  constructor(private http: HttpClient, private afs: AngularFirestore) {}

  getListaDePokemon(): Observable<Array<any>> {
    return this.http.get<Array<any>>('./assets/data/lista-de-pokemon.json');
  }

  guardarRespuesta(nombre: string): void {
    this.http.get<any>('https://ipinfo.io').subscribe(data => {
      console.log(data);
      const newRespuesta: PokeRespuestas = {
        nombre: nombre,
        ip: data.ip,
        fecha: new Date()
      };
      this.afs.collection<any>('answers').add(newRespuesta);
    });
  }
}
