import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Receipt } from '../../classes/receipt';
import { FileStorageService } from '../../services/file-storage/file-storage.service';
import { ReceiptStorageService } from '../../services/receipt-storage/receipt-storage.service';

@Component({
  selector: 'app-receipt-delete-dialog',
  templateUrl: './receipt-delete-dialog.component.html',
  styleUrls: ['./receipt-delete-dialog.component.css']
})
export class ReceiptDeleteDialogComponent implements OnInit {

  private receipt: Receipt;

  constructor(
    public dialogRef: MatDialogRef<ReceiptDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fileStorageService: FileStorageService,
    private receiptStorageService: ReceiptStorageService
  ) {
    this.receipt = data.receipt;
  }

  ngOnInit() {
    console.log(this.receipt);
  }

  deleteReceipt() {
    this.fileStorageService.deleteReceiptFiles(this.receipt);
    this.receiptStorageService.deleteReceipt(this.receipt);
    this.dialogRef.close();
  }
}
