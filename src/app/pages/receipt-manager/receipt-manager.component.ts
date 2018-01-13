import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ReceiptDetailDialogComponent } from '../../components/receipt-detail-dialog/receipt-detail-dialog.component';

@Component({
  selector: 'app-receipt-manager',
  templateUrl: './receipt-manager.component.html',
  styleUrls: ['./receipt-manager.component.css']
})
export class ReceiptManagerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //
  }

  openDialog() {
    const dialogRef = this.dialog.open(ReceiptDetailDialogComponent, {});
  }

}
