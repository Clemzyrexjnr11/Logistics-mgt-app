import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiResponse } from '../../shared/models/api-response';
import { finalize, Subject, takeUntil } from 'rxjs';
import { AuthenticationService } from '../../controllers/services/authentication.service';
import { SnackbarService } from '../../shared/services/snackbar.service';

function passwordMatchValidator(contorl: AbstractControl) {
  let password = contorl.get('password');
  let cpassword = contorl.get('cpassword');

  if (password?.value !== cpassword?.value) {
    return { passwordMisMatch: true };
  }

  return null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form!:FormGroup;
  passwordVisible: boolean = false;
  isLoading: boolean = false;
  destroy$ = new Subject<void>();
  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private snackbar:SnackbarService
  ) {
    this.initForm();
  }

  ngOnInit() {}

  initForm() {
   this.form = this.fb.group({
    fullName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    phoneNumber:['', Validators.required],
    password:['', Validators.required],
    cpassword:['', Validators.required],
   })

    this.form.setValidators(passwordMatchValidator);
  }

   togglePasswordVisibility(){
  this.passwordVisible = !this.passwordVisible
 }

  onSubmitForm() {
    if (this.form.invalid) {
      return;
    }
    let request = {
      fullname: this.form.value['fullName'],
      email: this.form.value['email'],
      phonenumber: this.form.value['phoneNumber'],
      password: this.form.value['password'],
      cpassword: this.form.value['cpassword'],
    };
    this.isLoading = true;
    this.authService
      .signUp(request)
      .pipe(
        finalize(() => (this.isLoading = false)),
        takeUntil(this.destroy$),
      )
      .subscribe({
        next:(res)=>{
          let response = new ApiResponse(res);
          if(response.success){
             this.snackbar.openSnackBar('Account created successfully', 'success-snackbar')
          };

          this.form.reset();
        },
        error:(res)=>{
        let response = new ApiResponse(res);
        let errorMessage = typeof(response.error.message) === 'string' ? response.error.message : response.error;
        this.snackbar.openSnackBar(errorMessage, 'error-snackbar')
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
