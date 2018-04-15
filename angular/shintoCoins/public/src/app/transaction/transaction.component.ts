import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CoinService } from '../coin.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  id;
  transaction;

  constructor(
    private _coinService : CoinService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => this.id = params['id']);
    this.transaction = this._coinService.getTransactionInfo(this.id);
    console.log(this.transaction)
  }

}
