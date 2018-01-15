import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ReceiptManagerComponent } from './pages/receipt-manager/receipt-manager.component';
import { ReceiptAddComponent } from './pages/receipt-add/receipt-add.component';

import { ReceiptDetailDialogComponent } from './shared/components/receipt-detail-dialog/receipt-detail-dialog.component';
import { CameraInputComponent } from './shared/components/camera-input/camera-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReceiptStorageService } from './shared/services/receipt-storage/receipt-storage.service';
import { FileStorageService } from './shared/services/file-storage/file-storage.service';

// Angular Material
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';

// Firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { FileUploadComponent } from './shared/components/file-upload/file-upload.component';
import { ReceiptFormComponent } from './shared/components/receipt-form/receipt-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReceiptManagerComponent,
    ReceiptDetailDialogComponent,
    ReceiptAddComponent,
    CameraInputComponent,
    FileUploadComponent,
    ReceiptFormComponent
  ],
  entryComponents: [
    ReceiptDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [ReceiptStorageService, FileStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
