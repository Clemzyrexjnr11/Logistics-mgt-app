import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './authentication-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [AuthRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule],
})
export class AuthenticationModule {}
