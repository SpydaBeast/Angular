import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-explicit',
  templateUrl: './explicit.component.html',
  styleUrls: ['./explicit.component.css']
})
export class ExplicitComponent implements OnInit {

  public explicitJokes

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getExplicitJokes();
  }
  getExplicitJokes() {
    this._dataService.getExplicitJokes().subscribe(
      data => { this.explicitJokes = data },
      err => console.error(err),
    );
  }
}
