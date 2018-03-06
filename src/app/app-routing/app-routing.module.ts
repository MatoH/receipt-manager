import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceiptListComponent } from '../pages/receipt-list/receipt-list.component';
import { ReceiptAddComponent } from '../pages/receipt-add/receipt-add.component';
import { ReceiptEditComponent } from '../pages/receipt-edit/receipt-edit.component';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  { path: 'list', component: ReceiptListComponent },
  { path: 'receipts/add', component: ReceiptAddComponent },
  { path: 'receipts/:key/edit', component: ReceiptEditComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
