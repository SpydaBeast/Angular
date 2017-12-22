import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<h1> My Tiny Library App</h1> <my-collection></my-collection>'
  
})
export class AppComponent {
  title = 'app';
}
