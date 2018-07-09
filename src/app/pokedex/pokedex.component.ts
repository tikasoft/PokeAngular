import { Component } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { PokedexService } from 'src/app/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemonList: Observable<Array<any>>;

  selectedPokemon: any;

  constructor(private pokedexService: PokedexService) {
    this.pokemonList = this.pokedexService.getPokemons();

    this.selectedPokemon = {
      number: 0,
      name: '',
      imgURL: ''
    };
  }

  setSelectedPokemon(pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
