import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ReceiptManagerComponent } from './pages/receipt-manager/receipt-manager.component';
import { ReceiptAddComponent } from './pages/receipt-add/receipt-add.component';

import { ReceiptDetailDialogComponent } from './components/receipt-detail-dialog/receipt-detail-dialog.component';
import { CameraInputComponent } from './components/camera-input/camera-input.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ReceiptManagerComponent,
    ReceiptDetailDialogComponent,
    ReceiptAddComponent,
    CameraInputComponent

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
