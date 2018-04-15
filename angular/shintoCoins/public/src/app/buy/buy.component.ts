import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  coinCount;
  buyAmount;
  coinValue;
  constructor(private _coinService: CoinService) { }

  ngOnInit() {
    this.getCoinInfo();
  }
  getCoinInfo(){
    this.coinCount = this._coinService.getCoinCount();
    this.coinValue = this.coinCount+1;
  }

  buyCoins(){
    this.coinCount = this._coinService.buyCoins({'action': 'bought', 'amount' : this.buyAmount, 'value': this.coinValue})
    this.buyAmount = null;
    this.coinValue = this.coinCount+1;
  }

}
