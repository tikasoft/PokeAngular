import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PokedexService {
  constructor(private http: HttpClient) {}

  getListaDePokemon(): Observable<Array<any>> {
    return this.http.get<Array<any>>('./assets/data/lista-de-pokemon.json');
  }
}
