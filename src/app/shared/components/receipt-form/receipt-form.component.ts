import { Component, OnInit, Input } from '@angular/core';
import { Receipt } from '../../classes/receipt';
import { ReceiptStorageService } from '../../services/receipt-storage/receipt-storage.service';
import { FileStorageService } from '../../services/file-storage/file-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-receipt-form',
  templateUrl: './receipt-form.component.html',
  styleUrls: ['./receipt-form.component.css']
})
export class ReceiptFormComponent implements OnInit {

  @Input() receipt: Receipt;
  @Input() action: string;
  @Input() buttonText: string;
  selectedFiles: FileList;
  private uploadFileCounter: number;
  private receiptKey: string;

  constructor(
    private receiptStorageService: ReceiptStorageService,
    private fileStorageService: FileStorageService,
    private router: Router
  ) {
    fileStorageService.fileWasStored.subscribe(fileObject => this.updateReceiptFiles(fileObject));
    this.uploadFileCounter = 0;
  }

  ngOnInit() {
  }

  onSubmit() {
    switch (this.action) {
      case 'store': {
        this.receiptKey = this.receiptStorageService.store(this.receipt);
        this.receiptStorageService.attachReceiptKey(this.receiptKey);
        break;
      }
      case 'update': {
        this.receiptKey = this.receipt.key;
        this.receiptStorageService.update(this.receipt);
        break;
      }
    }

    // // Using a juggling-check(==), you can test both null and undefined in one hit:
    if (this.selectedFiles != null) {
      this.fileStorageService.storeFiles(this.receiptKey, this.selectedFiles);
    } else {
      // Redirect to receipt list
      this.router.navigate(['list']);
    }
  }

  // TODO: Use interface to define object
  updateReceiptFiles(fileObject: any) {
    this.uploadFileCounter++;
    this.receipt.files.push(fileObject);
    // All files were already uploaded to file storage,
    // if yes then attach files to the already created receipt
    // if (this.receipt.files != null && this.selectedFiles.length === this.receipt.files.length) {
    if (typeof this.receipt.files !== 'undefined' && this.selectedFiles != null
        && this.selectedFiles.length === this.uploadFileCounter
    ) {
      this.receiptStorageService.updateFiles(this.receiptKey, this.receipt.files);

      // Redirect to receipt list
      this.router.navigate(['list']);
    }
  }
}
