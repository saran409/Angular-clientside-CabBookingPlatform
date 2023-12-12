import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/dto/login-request';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {

  dto: Login = new Login('', '');
  isAvailable:boolean=false;
  
  __loginService: LoginserviceService;
  @Output() loginDone = new EventEmitter<Boolean>();

  router: Router;
  constructor(__loginService: LoginserviceService, router: Router) {
    this.__loginService = __loginService;
    this.router = router;
  }

  forgotpassword(){
    this.router.navigate(["forgotpassword"]);
  }
  registration(){
    this.router.navigate(["registration"]);
  }
  doLogin() {
    console.log(
      'submit called with username: ' +
        this.dto.username +
        ' password: ' +
        this.dto.password
    );
    this.__loginService.doLoginCheck(this.dto).subscribe(
      (data) => {
        console.log('in data!');
        if (data != null) {
          console.log(data.role);
          console.log(data.token);
          console.log('data.username--------' + data.username);
          if (data.role === '[customer]' && data.token != null) {
            localStorage.setItem('LoginStatus', 'true');
            localStorage.setItem('Username', data.username);
            
            // this.loginDone.emit(true);
            this.router.navigate(['customerhome']);
          }
          if (data.role === '[driver]' && data.token != null) {
            localStorage.setItem('LoginStatus', 'true');
            localStorage.setItem('Username', data.username);
            this.router.navigate(['driverhome']);
          }
          if (data.role === '[admin]' && data.token != null) {
            localStorage.setItem('LoginStatus', 'true');
            localStorage.setItem('Username', data.username);
            this.router.navigate(['adminhome']);
          }
           
        }
      },
      (err) => {
        console.log('Error ' + err);
        this.isAvailable=true;
      }
    );
  }
}

