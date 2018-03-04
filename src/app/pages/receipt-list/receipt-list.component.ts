import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { ReceiptDetailDialogComponent } from '../../shared/components/receipt-detail-dialog/receipt-detail-dialog.component';
import { ReceiptDeleteDialogComponent } from '../../shared/components/receipt-delete-dialog/receipt-delete-dialog.component';
import { ReceiptStorageService } from '../../shared/services/receipt-storage/receipt-storage.service';
import { Receipt } from '../../shared/classes/receipt';

@Component({
  selector: 'app-receipt-list',
  templateUrl: './receipt-list.component.html',
  styleUrls: ['./receipt-list.component.css']
})
export class ReceiptListComponent implements OnInit {

  receipts: Observable<any[]>;

  constructor(
    public receiptStorageService: ReceiptStorageService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    // Get all receipts from receipt storage service as observable
    this.receipts = this.receiptStorageService.all();
  }

  openDetailDialog() {
    this.dialog.open(ReceiptDetailDialogComponent, {});
  }

  openDeleteDialog(receipt: Receipt) {
    this.dialog.open(ReceiptDeleteDialogComponent, {
        data: { receipt: receipt }
      });
  }
}
