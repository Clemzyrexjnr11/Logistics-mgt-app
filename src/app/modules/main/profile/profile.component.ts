import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../controllers/services/authentication.service';
import { Subject, takeUntil } from 'rxjs';
import { ConfirmationDialogComponent } from '../../shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
form!:FormGroup
 userName!:string
 userEmail!:string
 userPhoneNumber!:string;
 destroy$ = new Subject<void>();

constructor(private fb:FormBuilder, private authService:AuthenticationService, private dialog:MatDialog){
  this.form = this.fb.group({
    fullName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    phoneNumber:['', Validators.required]
  });

   this.userName = this.authService.userName;
   this.userEmail = this.authService.userEmail;
   this.userPhoneNumber = this.authService.userPhoneNumber;

}
ngOnInit(){
 this.autoFillFormFields();
}

autoFillFormFields(){
  const formControls = this.form.controls;
  formControls['fullName'].patchValue(this.userName)
  formControls['email'].patchValue(this.userEmail)
  formControls['phoneNumber'].patchValue(this.userPhoneNumber)
}
onSubmitForm(){

}

  openLogoutDialog() {
    this.dialog
      .open(ConfirmationDialogComponent, {
        width: '500px',
        height: '200px',
        backdropClass: 'custom-backdrop',
        data: {
          title: 'Confirm Logout',
          message: 'Are you sure you want to logout?',
        },
      })
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        if (result === 'confirm') {
          this.authService.logout();
        }
      });
  }

  logOut() {
    this.openLogoutDialog();
  }

ngOnDestroy(){
  
}
}
