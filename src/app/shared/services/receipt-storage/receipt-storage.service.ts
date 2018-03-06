import { Injectable } from '@angular/core';
import { Receipt } from '../../classes/receipt';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ReceiptStorageService {

  receiptList: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.receiptList = db.list(environment.firebase.databaseName);
  }

  // Transform receipt object to object that could to stored into firebase realtime database
  static transformReceipt(receipt: Receipt): object {
    return {
      key: receipt.key,
      name: receipt.name,
      description: receipt.description,
      purchaseDate: receipt.purchaseDate.toDateString(),
      expireDate: receipt.expireDate.toDateString(),
      files: receipt.files
    };
  }

  get(receiptKey: string): any {
    return this.db.object(`${environment.firebase.databaseName}/${receiptKey}`).valueChanges();
  }

  update(receipt: Receipt) {
    this.receiptList.update(
      receipt.key,
      ReceiptStorageService.transformReceipt(receipt)
    );
  }

  store(receipt: Receipt): string {
     return this.receiptList.push(ReceiptStorageService.transformReceipt(receipt)).key;
  }

  deleteReceipt(receipt: Receipt) {
    this.receiptList.remove(receipt.key);
  }

  attachReceiptKey(receiptKey: string) {
    this.receiptList.update(receiptKey, { key: receiptKey });
  }

  updateFiles(receiptKey: string, files: Array<object>) {
    this.receiptList.update(receiptKey, { files: files });
  }

  all(): Observable<any[]> {
    return this.receiptList.valueChanges();
  }
}
