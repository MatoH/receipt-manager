import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FileUpload } from '../../classes/file-upload';
import { FileStorageService } from '../../services/file-storage/file-storage.service';
import * as lodash from 'lodash';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {
  // 1 way binding from the parent
  @Input() selectedFiles: FileList;
  // 2 way binding from parent to child and vice versa
  @Output() selectedFilesChange = new EventEmitter<FileList>();

  currentUpload: FileUpload;

  constructor(private fileStorageService: FileStorageService) { }

  ngOnInit() {
    //
  }

  // TODO: add types
  detectFiles(event) {
    this.selectedFiles = event.target.files;
    this.selectedFilesChange.emit(this.selectedFiles);
  }

  uploadMulti() {
    const filesIndex = lodash.range(this.selectedFiles.length);
    lodash.each(filesIndex, (idx) => {
      // this.currentUpload = new FileUpload(this.selectedFiles[idx]);
      // this.fileUploadService.pushUpload(this.currentUpload);
      // this.currentUpload = new FileUpload(this.selectedFiles[idx]);
      this.fileStorageService.storeFile(this.selectedFiles[idx]);
    });
  }
}
