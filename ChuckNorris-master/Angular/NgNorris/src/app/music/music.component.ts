import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {

  public musicJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getMusicJokes();
  }

  getMusicJokes(){
    this._dataService.getMusicJokes().subscribe(
      data => {this.musicJokes = data },
      err => console.error(err),
    );
  }

}
