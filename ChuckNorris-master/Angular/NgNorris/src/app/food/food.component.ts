import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  public foodJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getFoodJokes();
  }
  getFoodJokes() {
    this._dataService.getFoodJokes().subscribe(
      data => { this.foodJokes = data },
      err => console.error(err),
    );
  }
}
