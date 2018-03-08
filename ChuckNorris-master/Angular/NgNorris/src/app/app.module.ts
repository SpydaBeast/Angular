import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatCommonModule } from '@angular/material/core/typings/common-behaviors/common-module';
import { HttpClientModule } from '@angular/common/http';
import { JokesComponent } from './jokes/jokes.component';
import { DataService } from './service/data.service';
import { ExplicitComponent } from './explicit/explicit.component';
import { DevComponent } from './dev/dev.component';
import { FoodComponent } from './food/food.component';
import { CelebrityComponent } from './celebrity/celebrity.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { PoliticalComponent } from './political/political.component';
import { ReligionComponent } from './religion/religion.component';
import { AnimalComponent } from './animal/animal.component';
import { HistoryComponent } from './history/history.component';
import { MusicComponent } from './music/music.component';
import { TravelComponent } from './travel/travel.component';
import { CareerComponent } from './career/career.component';
import { MoneyComponent } from './money/money.component';
import { FashionComponent } from './fashion/fashion.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    JokesComponent
,
    ExplicitComponent,
    DevComponent,
    FoodComponent,
    CelebrityComponent,
    ScienceComponent,
    SportsComponent,
    PoliticalComponent,
    ReligionComponent,
    AnimalComponent,
    HistoryComponent,
    MusicComponent,
    TravelComponent,
    CareerComponent,
    MoneyComponent,
    FashionComponent,
    MovieComponent
],
  imports: [
    BrowserModule, 
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
