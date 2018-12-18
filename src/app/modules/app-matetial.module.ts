import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatSnackBarModule,
  MatInputModule,
  // MatSnackBar,
  MatRadioModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    CommonModule,
    MatRadioModule,
    // MatSnackBar,
    MatInputModule
  ],
  exports: [
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    // MatSnackBar,
    MatSnackBarModule,
    MatListModule,
    MatRadioModule,
    MatCardModule,
    CommonModule,
    MatInputModule
  ],
})
export class AppMatetialModule { }
