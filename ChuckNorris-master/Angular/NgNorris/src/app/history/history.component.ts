import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  public historyJokes;
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getHistoryJokes();
  }

  getHistoryJokes(){
    this._dataService.getHistoryJokes().subscribe(
      data => {this.historyJokes =data},
      err => console.error(err),
    )
  }

}
