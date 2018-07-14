import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  listaDePokemon: Observable<Array<any>>;

  pokemonSeleccionado: any;

  constructor(private pokedexService: PokedexService) {
    this.listaDePokemon = this.pokedexService.getListaDePokemon();

    this.pokemonSeleccionado = {
      numero: 0,
      nombre: '',
      imgURL: ''
    };
  }

  setPokemonSeleccionado(pokemon: any): void {
    this.pokemonSeleccionado = pokemon;
  }
}
