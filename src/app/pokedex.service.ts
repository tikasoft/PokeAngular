import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  constructor(private http: HttpClient) {}

  getPokemons(): Observable<Array<any>> {
    return this.http.get<Array<any>>('./assets/data/pokemon-collection.json');
  }
}
