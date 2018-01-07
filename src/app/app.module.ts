import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';
import { RecipeManagerComponent } from './recipe-manager/recipe-manager.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeDetailDialogComponent } from './recipe-detail-dialog/recipe-detail-dialog.component';

import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { RecipeAddComponent } from './recipe-add/recipe-add.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RecipeManagerComponent,
    RecipeDetailDialogComponent,
    RecipeAddComponent
  ],
  entryComponents: [
    RecipeDetailDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
