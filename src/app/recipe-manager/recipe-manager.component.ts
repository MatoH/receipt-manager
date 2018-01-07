import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { RecipeDetailDialogComponent } from '../recipe-detail-dialog/recipe-detail-dialog.component';

@Component({
  selector: 'app-recipe-manager',
  templateUrl: './recipe-manager.component.html',
  styleUrls: ['./recipe-manager.component.css']
})
export class RecipeManagerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    //
  }

  openDialog() {
    const dialogRef = this.dialog.open(RecipeDetailDialogComponent, {
      // height: '350px'
    });
  }

}
