import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRequestComponent } from './login-request/login-request.component';
import { RegisterUserComponent } from './register-user/register-user.component';



@NgModule({
  declarations: [
    LoginRequestComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DTOModule { }
