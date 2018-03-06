import { Component, OnInit } from '@angular/core';
import { Receipt } from '../../shared/classes/receipt';

@Component({
  selector: 'app-receipt-add',
  templateUrl: './receipt-add.component.html',
  styleUrls: ['./receipt-add.component.css'],
})

export class ReceiptAddComponent implements OnInit {

  receipt: Receipt;

  constructor() {
    const actualDate = new Date;
    this.receipt = new Receipt('', '', '', actualDate, actualDate, []);
  }

  ngOnInit() {
  }
}
