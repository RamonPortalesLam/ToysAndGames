import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { ToysGridComponent } from './toys-grid.component';

describe('ToysGridComponent', () => {
  let component: ToysGridComponent;
  let dialog: MatDialog;

  
  beforeEach(() => {
    component = new ToysGridComponent(dialog);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
