import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecipeManagerComponent } from '../recipe-manager/recipe-manager.component';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'list', component: RecipeManagerComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
