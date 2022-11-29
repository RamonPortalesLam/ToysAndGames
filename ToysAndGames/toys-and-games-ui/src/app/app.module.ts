import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ToysGridComponent } from './toys/toys-grid/toys-grid.component';
import { ToysFormComponent } from './toys/toys-form/toys-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToysDeleteComponent } from './toys/toys-delete/toys-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    ToysGridComponent,
    ToysFormComponent,
    ToysDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  exports: [ToysGridComponent, ToysFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
