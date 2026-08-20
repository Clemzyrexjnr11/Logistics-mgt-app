import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon'
import { MatTabsModule } from '@angular/material/tabs';
import { AvatarModule } from 'ngx-avatars';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    SnackbarComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatSnackBarModule, 
    MatDialogModule
  ],
  exports:[
    MatIconModule,
    MatTabsModule,
    AvatarModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatDialogModule
  ]
})
export class SharedModule { }
