import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { IBook } from "../ibook";
import { DataService } from "../service/data.service";
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
  providers: [DataService]
})
export class BookDetailComponent implements OnInit, OnDestroy {

  bookId: number;
  book: IBook;
  sub: Subscription;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _dataSevice: DataService,
              private _snackBar: MatToolbarModule) {
  }

  ngOnInit(): void {
    if (!this.bookId) {
      this.sub = this._route.params.subscribe(
        params => {
          let id = +params['id'];
          this.getBook(id);
        });
      return;
    }
    this.getBook(this.bookId)
  }

  ngOnDestroy(): void{
    if (this.sub){
      this.sub.unsubscribe()
    }
  }
  getBook(id: number): void{
    this._dataSevice.getBook(id).subscribe(
      book => this.book = book,
      error => this.updateMessage(<any>error, 'Error'));
  }

  updateMessage(message:string, type:string, actionText:string = 'DISMISS'){
    if (message){
    //  this._snackBar.open(`${type}: ${message}`, actionText, {duration: 3000});
    }
  }
  return(): void {
    this._router.navigate(['/collection']);
  }

  updateBook(book: IBook): void {
    this._dataSevice.updateBook(book)
      .subscribe(
        book => {
       //   this._snackBar.open(`"${book.title}" has been updated!`, 'DISMISS', {duration: 3000});
        }, error => this.updateMessage(<any>error, 'ERROR'));
  }
}
