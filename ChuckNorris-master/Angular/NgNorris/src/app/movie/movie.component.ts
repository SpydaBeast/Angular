import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  public movieJokes;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.getMovieJokes();
  }

  getMovieJokes(){
    this._dataService.getMovieJokes().subscribe(
      data => { this.movieJokes = data },
      err => console.error(err),
    );
  }
}
