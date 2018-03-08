import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  public travelJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getTravelJokes();
  }

  getTravelJokes(){
    this._dataService.getTravelJokes().subscribe(
      data => { this.travelJokes = data },
      err => console.error(err),
    );
  }

}
