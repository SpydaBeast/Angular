import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  public careerJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getCareerJokes();
  }

  getCareerJokes(){
    this._dataService.getFashionJokes().subscribe(
      data => { this.careerJokes = data},
      err => console.error(err),
    )
    
  }

}
