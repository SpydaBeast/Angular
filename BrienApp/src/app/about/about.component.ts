import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  apptitle = "Art of Mars"
  pageTitle:string = "What is artofmars.org?"
  appAuthor:string = "Brien Calloway"
  ourVision:string = "To show ways of improving life using ideas, thoughts, and strategy."
}
