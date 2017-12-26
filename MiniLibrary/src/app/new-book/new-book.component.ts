import { Component, OnInit } from '@angular/core';
import { IBook } from "../ibook";
import { MatDialogRef } from '@angular/material'

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  book:IBook;

  constructor(private dialogRef: MatDialogRef<NewBookComponent>) { }

  ngOnInit() {
    this.book = {
      id: 0,
      title: '',
      author: '',
      isCheckedOut: false,
      rating: 0
    }
  }

  cancel(): void{
    this.dialogRef.close();
  }
  save(): void{
    this.dialogRef.close(this.book)
  }
}
