import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
 
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DriverpageComponent } from './driverpage/driverpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CabComponent } from './cab/cab.component';

const routes: Routes = [
  {path:'', component:LoginpageComponent },
  {path:'registration', component:RegistrationComponent},
  {path:'forgotpassword', component:ForgotPasswordComponent},
  {path:'resetpassword', component:ResetPasswordComponent},
  {path:'customerhome', component:UserpageComponent},
  {path:'driverhome', component:DriverpageComponent},
  {path:'adminhome', component:AdminpageComponent},
  {path:'cab/:mode', component:CabComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
