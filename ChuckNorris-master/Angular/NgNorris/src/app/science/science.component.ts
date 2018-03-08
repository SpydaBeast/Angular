import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  public scienceJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getScienceJokes();
  }
  getScienceJokes() {
    this._dataService.getScienceJokes().subscribe(
      data => { this.scienceJokes = data },
      err => console.error(err),
    );
  }
}
