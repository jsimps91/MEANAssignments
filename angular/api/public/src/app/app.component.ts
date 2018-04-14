import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  loggedIn = false;
  constructor(private _pokemonService : PokemonService){}
  butterfree;
  ngOnInit(){
  //  this.getPokemon()
  }
  // getPokemon(){
  //   let pokemon = this._pokemonService.getButterfree()
  //   pokemon.subscribe(data => (this.butterfree = data))
  // }

  e(event){
    console.log(event)
  }
}

