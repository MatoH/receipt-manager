import { Component, OnInit } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-receipt-add',
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.css'],
  providers: [AngularFireDatabase]
})

export class ReceiptAddComponent implements OnInit {

  // AngularFireList array of different types
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;


  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('receipts');
    this.items = this.itemsRef.snapshotChanges().map(receipts => {
      return receipts.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ngOnInit() {
    //
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }
}
