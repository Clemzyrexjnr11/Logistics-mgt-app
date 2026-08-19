import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form!:FormGroup;
  passwordVisible: boolean = false;
 constructor(private fb:FormBuilder){
   this.form = this.fb.group({
    fullName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    cpassword:['', Validators.required],
   })
 }

 ngOnInit(){

 }

 togglePasswordVisibility(){
  this.passwordVisible = !this.passwordVisible
 }

 onSubmitForm(){
  console.log(this.form)
 }
}
