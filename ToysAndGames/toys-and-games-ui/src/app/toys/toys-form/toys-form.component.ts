import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { Product } from 'src/app/models/product.model';
import { ToysService } from 'src/app/services/toys.service';

@Component({
  selector: 'app-toys-form',
  templateUrl: './toys-form.component.html',
  styleUrls: ['./toys-form.component.sass']
})
export class ToysFormComponent implements OnInit {

  //@Input() title: string = "New Toy";
  toyForm!: FormGroup;
  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<ToysFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private toyService: ToysService) { 

  }

  ngOnInit(): void {
    this.toyForm = this.fb.group({
      "id": [""],
      "name": ["", [Validators.required, Validators.maxLength(50)]],
      "description": ["", [Validators.maxLength(100)]],
      "ageRestriction": ["", [Validators.min(0), Validators.max(100)]],
      "company": ["", [Validators.required, Validators.maxLength(50)]],
      "price": ["", [Validators.required, Validators.min(1), Validators.max(1000)]]
    });

    if(this.data.productId){
      this.toyService.getToyById(this.data.productId).subscribe(x =>{
        this.toyForm.patchValue(x);
      });
    }
  }

  save(): void{
    if(this.toyForm.valid){
      //console.log(this.toyForm.value);
      const data = this.toyForm.getRawValue() as Product;
      if(data.id){        
        this.toyService.updateToy(data).subscribe(_ =>{
          console.log("actualizado correctamente");
          this.dialogRef.close(true);
        });
      }else{
        data.id = 0;
        this.toyService.addToy(data).subscribe(_ =>{
          console.log("agregado correctamente");
          this.dialogRef.close(true);
        });
      }
    }
  }

}
