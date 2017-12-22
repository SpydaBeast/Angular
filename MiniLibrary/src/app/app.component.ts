import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: '<my-collection></my-collection>',
  providers: [DataService]
})
export class AppComponent {
  title = 'app';
}
