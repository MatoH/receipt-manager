import { Component, OnInit } from '@angular/core';
import { Receipt } from '../../shared/classes/receipt';
import { ReceiptStorageService } from '../../shared/services/receipt-storage/receipt-storage.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { FileDeleteDialogComponent } from '../../shared/components/file-delete-dialog/file-delete-dialog.component';

@Component({
  selector: 'app-receipt-edit',
  templateUrl: './receipt-edit.component.html',
  styleUrls: ['./receipt-edit.component.css']
})
export class ReceiptEditComponent implements OnInit {

  public receipt: Receipt;

  constructor(
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private receiptStorageService: ReceiptStorageService,
  ) { }

  ngOnInit() {
    const receiptKey = this.route.snapshot.params['key'];
    this.receiptStorageService.get(receiptKey)
      .subscribe(receipt => {
        // Parse dates
        receipt.expireDate = new Date(receipt.expireDate);
        receipt.purchaseDate = new Date(receipt.purchaseDate);

        this.receipt = receipt;
      });
  }

  openDeleteDialog(receipt: Receipt, fileName: string) {
    this.dialog.open(FileDeleteDialogComponent, {
      data: {
        receipt: receipt,
        fileName: fileName
      }
    });
  }
}
