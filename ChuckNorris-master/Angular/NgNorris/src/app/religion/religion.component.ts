import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-religion',
  templateUrl: './religion.component.html',
  styleUrls: ['./religion.component.css']
})
export class ReligionComponent implements OnInit {

  public religionJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getReligionJokes();
  }
  getReligionJokes(){
    this._dataService.getReligionJokes().subscribe(
      data => {this.religionJokes = data},
      err => console.error(err),
    );
  }

}
