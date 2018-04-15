import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
sellAmount;
coinValue;
coinCount;
message;
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
    this.getCoinInfo()
  }
  getCoinInfo(){
    this.coinCount = this._coinService.getCoinCount();
    this.coinValue = this.coinCount+1;
    if(this.coinCount < 1){
      this.message = "You don't have any coins to sell"
    }
  }
  sellCoins(){
    if(this.sellAmount > this.coinCount){
      this.message = "You don't have that many coins!"
    }
    else{
      this._coinService.sellCoins({'action': 'sold', 'amount' : this.sellAmount, 'value': this.coinValue})
      this.getCoinInfo();
      this.message = null;
    }
  }

}
