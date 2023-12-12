import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 
import { RegistrationComponent } from './registration/registration.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
    LoginpageComponent,
    RegistrationComponent,
    LoginpageComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule { }
