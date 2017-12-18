import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor() { 
    this.startTime = new Date();
    this.startTime.setHours(10, 0);
    this.endTime = new Date();
    this.endTime.setHours(15, 0);
  }

  ngOnInit() {
  }

  pageTitle:string = 'Books';

  startTime:Date;
  endTime:Date;

  showOperatingHours: boolean = false;

}
