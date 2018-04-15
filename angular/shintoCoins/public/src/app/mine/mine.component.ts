import { Component, OnInit } from '@angular/core';
import { CoinService } from '../coin.service';
@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  answer = 8;
  guess;
  message;
  constructor(private _coinService : CoinService) { }

  ngOnInit() {
  }
  submitAnswer() :any {
    if(this.guess == this.answer){
      this._coinService.mineCoins();
        this.guess = null;
        this.message = null;
    }
    else{
      this.guess = null;
      this.message = "Try again!"
    }
  }
}
