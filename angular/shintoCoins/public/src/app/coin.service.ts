import { Injectable } from '@angular/core';

@Injectable()
export class CoinService {
  coins = 0;
  ledger = []
  id = 1;

  constructor() { 
   
  }
  mineCoins(){
    this.coins += 1;
    this.ledger.push({'action' : 'mined', 'amount' : 1, 'value' : this.coins, 'id' : this.id})
    this.id += 1;
    return this.coins
  }
  getCoinCount(){
    return this.coins;
  }

  buyCoins(info){
    this.coins += info['amount'];
    info['id'] = this.id;
    this.ledger.push(info)
    this.id += 1;
    return this.coins;
  }

  sellCoins(info){
    this.coins -= info['amount'];
    info['id'] - this.id;
    this.ledger.push(info)
    this.id += 1;
    return this.coins;
  }
  getLedger(){
    return this.ledger;
  }

  getTransactionInfo(id){
    for(var t of this.ledger){
      if(t['id'] == id){
        return t;
      }
    }
  }
}
