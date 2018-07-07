import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemonList: Array<any>;

  selectedPokemon: any;

  constructor() {
    this.pokemonList = [
      {
        number: 1,
        name: 'Bulbasaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        number: 2,
        name: 'Ivysaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      },
      {
        number: 3,
        name: 'Venusaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
      },
      {
        number: 4,
        name: 'Charmander',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      },
      {
        number: 5,
        name: 'Charmeleon',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
      },
      {
        number: 6,
        name: 'Charizard',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
      },
      {
        number: 7,
        name: 'Squirtle',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      },
      {
        number: 8,
        name: 'Wartortle',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
      },
      {
        number: 9,
        name: 'Blastoise',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
      }
    ];

    this.selectedPokemon = this.pokemonList[0];
  }

  setSelectedPokemon(pokemon): void {
    this.selectedPokemon = pokemon;
  }
}
