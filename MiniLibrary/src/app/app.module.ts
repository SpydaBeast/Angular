import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { BrowerAnimationModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    CollectionComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    BrowerAnimationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
