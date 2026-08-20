import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../shared/models/api-response';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from '../../controllers/services/authentication.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../../shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   form!:FormGroup;
   passwordVisible:boolean = false;
  isLoading: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router:Router,
    private snackbar:SnackbarService
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  // goToForgotPassword() {}

  onSubmitForm() {
    if (this.form.invalid) {
      return;
    }
    let request = {
      email: this.form.value['email'],
      password: this.form.value['password'],
    };
    this.isLoading = true;
    this.authService
      .login(request)
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next:(res)=>{
        let response = new ApiResponse(res);
         if(response.success){
          this.authService.saveActiveUserInLocalStorage(response.data);
          this.snackbar.openSnackBar('Login successful', 'success-snackbar')
          this.router.navigate(['/app']);
         }
          this.form.reset();

        },
        error:(res)=>{
        let response = new ApiResponse(res);
        let errorMessage = typeof(response.error.message) === 'string' ? response.error.message : response.error;
        ;
        console.log(response);
        this.snackbar.openSnackBar(errorMessage, 'error-snackbar')
        }
        
      });
  }

  
  togglePasswordVisibility(){
  this.passwordVisible = !this.passwordVisible
 }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }



}
