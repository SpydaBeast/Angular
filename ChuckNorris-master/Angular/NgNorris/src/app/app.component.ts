import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JokesComponent } from './jokes/jokes.component';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Front-End Face-off';
  hero = 'Chuck Norris';
  slogan = 'Harness the unstoppable force that is Chuck Norris';
}
