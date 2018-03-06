import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Receipt } from '../../classes/receipt';
import { FileStorageService } from '../../services/file-storage/file-storage.service';
import { ReceiptStorageService } from '../../services/receipt-storage/receipt-storage.service';

@Component({
  selector: 'app-file-delete-dialog',
  templateUrl: './file-delete-dialog.component.html',
  styleUrls: ['./file-delete-dialog.component.css']
})
export class FileDeleteDialogComponent implements OnInit {

  public fileName: string;
  private receipt: Receipt;

  constructor(
    public dialogRef: MatDialogRef<FileDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fileStorageService: FileStorageService,
    private receiptStorageService: ReceiptStorageService
  ) {
    this.fileName = data.fileName;
    this.receipt = data.receipt;
  }
  ngOnInit() {
  }

  deleteFile() {
    this.fileStorageService.deleteFile(this.receipt, this.fileName);
    // Remove file from the files list of receipt - just reference
    const files = this.receipt.files.filter(file => file.name !== this.fileName);
    this.receiptStorageService.updateFiles(this.receipt.key, files);
    this.dialogRef.close();
  }
}
