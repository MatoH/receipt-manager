import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Receipt } from '../../classes/receipt';

@Component({
  selector: 'app-receipt-detail-dialog',
  templateUrl: './receipt-detail-dialog.component.html',
  styleUrls: ['./receipt-detail-dialog.component.css']
})
export class ReceiptDetailDialogComponent implements OnInit {

  public receipt: Receipt;

  constructor(
    public dialogRef: MatDialogRef<ReceiptDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.receipt = data.receipt;
  }

  ngOnInit() {
  }

}
