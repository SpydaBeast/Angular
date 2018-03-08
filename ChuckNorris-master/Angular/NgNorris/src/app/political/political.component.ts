import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-political',
  templateUrl: './political.component.html',
  styleUrls: ['./political.component.css']
})
export class PoliticalComponent implements OnInit {

  public politicalJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getPoliticalJokes();
  }

  getPoliticalJokes() {
    this._dataService.getPoliticalJokes().subscribe(
      data => { this.politicalJokes = data },
      err => console.error(err),
    );
  }
}
