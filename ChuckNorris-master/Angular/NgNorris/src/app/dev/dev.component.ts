import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {

  public devJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getDevJokes();
  }

  getDevJokes() {
    this._dataService.getDevJokes().subscribe(
      data => { this.devJokes = data },
      err => console.error(err),
    );
  }

}
