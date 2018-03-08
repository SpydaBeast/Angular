import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css']
})
export class FashionComponent implements OnInit {

  public fashionJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getFashionJokes();
  }

  getFashionJokes() {
    this._dataService.getFashionJokes().subscribe(
      data => { this.fashionJokes = data},
      err => console.error(err),
    )
  }
}
