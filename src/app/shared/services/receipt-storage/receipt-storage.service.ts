import { Injectable } from '@angular/core';
import { Receipt } from '../../classes/receipt';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
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
      name: receipt.name,
      description: receipt.description,
      purchaseDate: receipt.purchaseDate.toDateString(),
      expireDate: receipt.expireDate.toDateString(),
      filesUrls: receipt.filesUrls
    };
  }
  storeReceipt(receipt: Receipt) {
    console.log('Creating/Store new receipt !!!');
    this.receiptList.push(ReceiptStorageService.transformReceipt(receipt));
  }
}
