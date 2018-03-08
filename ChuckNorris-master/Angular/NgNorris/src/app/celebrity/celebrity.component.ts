import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.css']
})
export class CelebrityComponent implements OnInit {

  public celebrityJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getCelebrityJokes();
  }
  getCelebrityJokes() {
    this._dataService.getCelebrityJokes().subscribe(
      data => { this.celebrityJokes = data },
      err => console.error(err),
    );
  }

}
