import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs/Subject';
import { environment } from '../../../../environments/environment';
import { Receipt } from '../../classes/receipt';

@Injectable()
export class FileStorageService {

  private storageReference = firebase.storage().ref();

  // public fileWasStored = new Subject<string>();
  public fileWasStored = new Subject<any>();

  constructor() { }

  deleteReceiptFiles(receipt: Receipt) {
    if (typeof receipt.files !== 'undefined') {
      for (const file of receipt.files) {
        this.deleteFile(receipt, file.name);
      }
    }
  }

  deleteFile(receipt: Receipt, fileName: string) {
    this.storageReference.child(`${environment.firebase.fileStorageName}/${receipt.key}/${fileName}`).delete().then(function() {
      console.log('File: ' + fileName + ' was deleted!');
    }).catch(function(error) {
      console.log(error);
    });
  }

  storeFiles(receiptKey: string, files: any) {
    for (const file of files) {
      this.store(receiptKey, file);
    }
  }

  store(receiptKey: string, file: File) {
    // let progress = 0;
    const fileUploadTask = this.storageReference.child(`${environment.firebase.fileStorageName}/${receiptKey}/${file.name}`).put(file);
    // Add the event listener on the firebase storage
    fileUploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      () => {
        // TODO: Implement progress bar - use angular material progress bar
        // File upload is in the progress
        // progress = (fileUploadTask.snapshot.bytesTransferred / fileUploadTask.snapshot.totalBytes) * 100;
      },
      (error) => {
        // upload failed
        console.log(error);
      },
      () => {
        // TODO: Use interface
        // File was stored, trigger event with file data
        this.fileWasStored.next({
          'name': file.name,
          'downloadUrl': fileUploadTask.snapshot.downloadURL
        });
      }
    );
  }
}
