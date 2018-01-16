import { Component, OnInit } from '@angular/core';
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

  receipt: Receipt;
  selectedFiles: FileList;

  constructor(
    private receiptStorageService: ReceiptStorageService,
    private fileStorageService: FileStorageService,
    private router: Router
  ) {
    fileStorageService.fileWasStored.subscribe(fileObject => this.storeFileUrlWithReceipt(fileObject));
  }

  ngOnInit() {
    const actualDate = new Date;
    this.receipt = new Receipt('', '', actualDate, actualDate, []);
  }

  onSubmit() {
    // Using a juggling-check(==), you can test both null and undefined in one hit:
    if (this.selectedFiles != null) {
      this.fileStorageService.storeFiles(this.selectedFiles);
    } else {
      // Store receipt without picture
      this.receiptStorageService.store(this.receipt);
      // Redirect to receipt list
      this.router.navigate(['list']);
    }
  }

  storeFileUrlWithReceipt(fileObject: object) {
    this.receipt.files.push(fileObject);
    // All files were already uploaded to file storage,
    // if yes then save receipt with all files urls
    if (this.receipt.files != null && this.selectedFiles.length === this.receipt.files.length) {
      this.receiptStorageService.store(this.receipt);
      // Redirect to receipt list
      this.router.navigate(['list']);
    }
  }
}
