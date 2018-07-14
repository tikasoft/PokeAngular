import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { PokedexService } from 'src/app/pokedex.service';

const RespuestaCorrecta: number = 2;

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  listaDePokemon: Observable<Array<any>>;

  pokemonSeleccionado: any;

  mostrarPregunta: boolean;

  respuestaDelUsuario: number;

  respuestaFueDada: boolean;

  laRespuestaDadaFueCorrecta: boolean;

  checked: boolean;

  nombre: string;

  constructor(private pokedexService: PokedexService) {
    this.listaDePokemon = this.pokedexService.getListaDePokemon();

    this.pokemonSeleccionado = {
      numero: 0,
      nombre: '',
      imgURL: ''
    };

    this.mostrarPregunta = false;
    this.respuestaFueDada = false;
    this.laRespuestaDadaFueCorrecta = false;
    this.checked = false;
    this.nombre = '';
  }

  setPokemonSeleccionado(pokemon: any): void {
    this.pokemonSeleccionado = pokemon;
  }

  onCambioDeRespuesta(opcion: number): void {
    this.respuestaDelUsuario = opcion;
  }

  validarRespuesta(): void {
    if (this.respuestaDelUsuario) {
      this.respuestaFueDada = true;
      this.laRespuestaDadaFueCorrecta =
        RespuestaCorrecta === this.respuestaDelUsuario;

      if (this.laRespuestaDadaFueCorrecta) {
        this.pokedexService.guardarRespuesta(this.nombre);
      }
    }
  }

  cerrarModal(): void {
    if (this.respuestaDelUsuario && !this.laRespuestaDadaFueCorrecta) {
      this.respuestaFueDada = false;
      this.laRespuestaDadaFueCorrecta = false;
    }
    this.checked = false;
  }

  mostrarAMew(pokemon) {
    return pokemon.numero === 151;
  }
}
