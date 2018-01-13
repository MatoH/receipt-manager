import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReceiptManagerComponent } from '../pages/receipt-manager/receipt-manager.component';
import { ReceiptAddComponent } from '../pages/receipt-add/receipt-add.component';
import { AboutComponent } from '../pages/about/about.component';

const routes: Routes = [
  { path: 'list', component: ReceiptManagerComponent },
  { path: 'receipts/add', component: ReceiptAddComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
