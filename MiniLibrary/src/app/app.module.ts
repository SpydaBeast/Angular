import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TabsComponent } from './tabs/tabs.component';
import { MatDialogModule } from '@angular/material/dialog';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { RatingCategoryPipe } from './pipes/rating-category.pipe';
import { RatingComponent } from './rating/rating.component';
import { HttpModule } from '@angular/http';
import { routing } from "./app.routing";
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookGuardService } from "./guards/book-guard.service";
import { NewBookComponent } from './new-book/new-book.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent,
    RatingCategoryPipe,
    RatingComponent,
    TabsComponent,
    BookDetailComponent,
    NewBookComponent,
],
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    HttpModule,
    MatTabsModule,
    MatToolbarModule,
    routing,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [BookGuardService],
  entryComponents: [NewBookComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
