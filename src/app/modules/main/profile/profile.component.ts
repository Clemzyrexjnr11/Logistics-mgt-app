import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
form!:FormGroup
constructor(private fb:FormBuilder){
  this.form = this.fb.group({
    fullName:['', Validators.required],
    email:['', [Validators.required, Validators.email]],
    phoneNumber:['', Validators.required]
  })
}
ngOnInit(){
 this.autoFillFormFields();
}

autoFillFormFields(){
  const formControls = this.form.controls;
  formControls['fullName'].patchValue('Clement Eteka')
  formControls['email'].patchValue('etekaclement@company.com')
  formControls['phoneNumber'].patchValue('08142563882')
}
onSubmitForm(){

}

logOut(){

}

ngOnDestroy(){
  
}
}
