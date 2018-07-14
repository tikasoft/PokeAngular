import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  listaDePokemon: Array<any>;

  pokemonSeleccionado: any;

  constructor() {
    this.listaDePokemon = [
      {
        numero: 1,
        nombre: 'Bulbasaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
      },
      {
        numero: 2,
        nombre: 'Ivysaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
      },
      {
        numero: 3,
        nombre: 'Venusaur',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
      },
      {
        numero: 4,
        nombre: 'Charmander',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png'
      },
      {
        numero: 5,
        nombre: 'Charmeleon',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'
      },
      {
        numero: 6,
        nombre: 'Charizard',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png'
      },
      {
        numero: 7,
        nombre: 'Squirtle',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png'
      },
      {
        numero: 8,
        nombre: 'Wartortle',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png'
      },
      {
        numero: 9,
        nombre: 'Blastoise',
        imgURL:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png'
      }
    ];

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
