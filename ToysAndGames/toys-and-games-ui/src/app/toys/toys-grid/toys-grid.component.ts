import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToysFormComponent } from '../toys-form/toys-form.component';
import { ToysDeleteComponent } from '../toys-delete/toys-delete.component';

@Component({
  selector: 'app-toys-grid',
  templateUrl: './toys-grid.component.html',
  styleUrls: ['./toys-grid.component.sass']
})
export class ToysGridComponent implements OnInit {

  @Input() toys: Product[] = [];
  @Output() updateGrid: EventEmitter<boolean> = new EventEmitter(false);

  displayedColumns: string[] = ['id', 'name', 'ageRestriction', 'price', 'company', 'options'];
  dialogTitle: string = "Add New Toy";
  productId: number = 0;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  
  openForm(): void{
    const dialogRef = this.dialog.open(ToysFormComponent, {
      width: '250px',
      data: { title: this.dialogTitle, productId: this.productId },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.dialogTitle = "Add New Toy";
      this.productId = 0;
      this.updateGrid.emit(result);
    });
  }

  editProduct(id: number): void {
    this.dialogTitle = "Edit Product";
    this.productId = id;
    this.openForm();
  }

  deleteProduct(id: number): void {    
    console.log("delete: ", id);
    this.dialogTitle = "Confirm";
    this.productId = id;
    
    const dialogRef = this.dialog.open(ToysDeleteComponent, {
      width: '250px',
      data: { title: this.dialogTitle, productId: this.productId },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      this.dialogTitle = "Add New Toy";
      this.productId = 0;
      this.updateGrid.emit(result);
    });
  }
}
