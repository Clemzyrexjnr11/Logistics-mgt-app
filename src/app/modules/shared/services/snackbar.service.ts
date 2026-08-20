import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackbar:MatSnackBar) { }

  openSnackBar(message:string, panelClass:string){
    this.snackbar.openFromComponent(SnackbarComponent, {
      data: message,
      duration: 4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: [panelClass],
    })
  }
}
