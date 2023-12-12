import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserpageComponent } from './userpage/userpage.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { RegistrationComponent } from './login/registration/registration.component';
import { LoginpageComponent } from './login/loginpage/loginpage.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { DriverpageComponent } from './driverpage/driverpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CabComponent } from './cab/cab.component';
import { DriversComponent } from './drivers/drivers.component';
import { ComplaintComponent } from './complaint/complaint.component';

@NgModule({
  declarations: [
    AppComponent,
    UserpageComponent,
    ResetPasswordComponent,
    RegistrationComponent,
    LoginpageComponent,
    ForgotPasswordComponent,
    DriverpageComponent,
    AdminpageComponent,
    CabComponent,
    DriversComponent,
    ComplaintComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
