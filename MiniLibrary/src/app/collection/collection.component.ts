import { Component, OnInit } from '@angular/core';
import { IBook } from '../ibook';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { DataService } from '../service/data.service';

@Component({
  selector: 'my-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  constructor(private dataService: DataService, private snackBar: MatSnackBarModule) {
    this.startTime = new Date();
    this.startTime.setHours(10, 0);
    this.endTime = new Date();
    this.endTime.setHours(15, 0);
  }

  ngOnInit() {
    this.books = this.dataService.getBooks();
  }

  pageTitle:string = 'Mini Library';

  public books: Array<IBook>;

  startTime:Date;
  endTime:Date;

  showOperatingHours: boolean = false;

  updateMessage(message: string, type: string): void{
    if (message){
     // this.snackBar.open(`${type}: ${message}`, 'DISMISS', {duration: 3000});
    }
  }

  onRatingUpdate(book: IBook): void{
    this.updateMessage(book.title, " Rating has been updated ")
  }
}
