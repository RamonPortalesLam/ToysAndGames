import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { ToysService } from 'src/app/services/toys.service';

import { ToysFormComponent } from './toys-form.component';

describe('Formulario', () => {
  let componente: ToysFormComponent;
  let dialogRef: MatDialogRef<ToysFormComponent>;
  let data: DialogData;
  let toyService: ToysService;

  beforeEach(() => {
    componente  = new ToysFormComponent(new FormBuilder(), dialogRef,data,toyService);
  });

  // it('Prueba de formulario', () => {
  //   console.log(componente);
  //   expect(componente.toyForm.contains('data')).toBeTruthy();
  // });
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysFormComponent ]
    })
    .compileComponents();
  });


  it('should create', () => {
    expect(componente).toBeTruthy();
  });
});
