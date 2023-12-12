import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUser } from 'src/app/dto/register-user';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  role: string;
  isPassword:boolean=false;
  checkpassword: string = '';
  __loginService: LoginserviceService;
  router: Router;
  dto: RegisterUser = new RegisterUser(
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    0,
    '',
    
    
  
  );

  constructor(__loginService: LoginserviceService, router: Router) {
    this.__loginService = __loginService;
    this.role = '';
    this.router = router;
  }

  doRegister() {
    this.dto.userrole = this.role;
    console.log(this.dto);
    if (this.dto.password === this.checkpassword) {
      this.__loginService.doRegister(this.dto).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['']);
        },
        (err) => {
          console.log('Error ' + err);
          
        }
      );
      
    }
    else{
      this.isPassword=true;
  }
  }
  

}
