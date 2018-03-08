import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {

  public moneyJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getMoneyJokes();
  }

  getMoneyJokes(){
    this._dataService.getMoneyJokes().subscribe(
      data => {this.moneyJokes = data},
      err => console.error(err),
    );
  }
}
