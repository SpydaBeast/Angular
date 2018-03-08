import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  public sportsJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getSportsJokes();
  }
  getSportsJokes() {
    this._dataService.getSportsJokes().subscribe(
      data => { this.sportsJokes = data },
      err => console.error(err),
    );
  }

}
