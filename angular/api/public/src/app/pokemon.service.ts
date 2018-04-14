import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class PokemonService {

  constructor(private _http: HttpClient) {
    console.log('hello')
    // this.getButterfree()
    // this.getOtherPokemon()
  }
  abilities = [];
  check
 
  getButterfree() {

    let butterfree = this._http.get('https://pokeapi.co/api/v2/pokemon/12/');
    butterfree.subscribe(data => {return(data)})
    // butterfree.subscribe(data => {console.log("Got pokemon", data)
    //   for(var a of data['abilities']){
    //     this.abilities.push(a['ability'])
    //   }
    //   console.log('abilties: ', this.abilities)
    //   return data;
      
    //})
  }
  // getOtherPokemon() {
  //   for (var i = 1; i < 250; i++) {
  //     const pokemon = this._http.get(`https://cors-anywhere.herokuapp.com/https://pokeapi.co/api/v2/pokemon/${i}`);
  //     pokemon.subscribe(data => {
        
  //       for(var a of data['abilities']) {
  //         if(this.abilities.indexOf(a['ability']) >= 0){
  //           console.log("same", data)
  //           break;
  //         }
         
  //       }
  //     })
  //   }
  // }
}
