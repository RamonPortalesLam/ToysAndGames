import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { ToysService } from 'src/app/services/toys.service';

@Component({
  selector: 'app-toys-delete',
  templateUrl: './toys-delete.component.html',
  styleUrls: ['./toys-delete.component.sass']
})
export class ToysDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ToysDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private toyService: ToysService) { }

  ngOnInit(): void {
  }

  delete(): void{
    this.toyService.deleteToy(this.data.productId).subscribe(_ =>{
      this.dialogRef.close(true);  
    });
  }

  cancel(): void{
    this.dialogRef.close();
  }

}
