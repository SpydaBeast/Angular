import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import {IBook } from '../ibook';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  constructor() { }

  @Input() rating:number;
  @Input() book: IBook;
  @Output() ratingClicked: EventEmitter<IBook> = new EventEmitter<IBook>();

  ngOnInit() {
  }

}
