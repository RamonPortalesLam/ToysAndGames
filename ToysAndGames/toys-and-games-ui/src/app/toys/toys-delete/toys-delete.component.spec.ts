import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialog-data';
import { ToysService } from 'src/app/services/toys.service';

import { ToysDeleteComponent } from './toys-delete.component';

describe('ToysDeleteComponent', () => {
  let component: ToysDeleteComponent;
  let fixture: ComponentFixture<ToysDeleteComponent>;
  let dialogRef: MatDialogRef<ToysDeleteComponent>;
  let data: DialogData; 
  let toyService: ToysService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToysDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    component = new ToysDeleteComponent(dialogRef,data, toyService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
