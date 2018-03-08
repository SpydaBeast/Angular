import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  public animalJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getAnimalJokes();
  }

  getAnimalJokes(){
    this._dataService.getAnimalJokes().subscribe(
      data => {this.animalJokes = data},
      err => console.error(err),
    );
  }

}
