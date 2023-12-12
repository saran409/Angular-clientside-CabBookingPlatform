import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPassword } from 'src/app/dto/reset-password';
import { LoginserviceService } from 'src/app/service/loginservice.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  dto: ResetPassword = new ResetPassword('', '', '');
  confirmpassword: string = '';
  router: Router;
  __loginService: LoginserviceService;
  constructor(__loginService: LoginserviceService, router: Router) {
    this.__loginService = __loginService;
    this.router = router;
  }
  changePassword() {
    if (this.dto.password === this.confirmpassword) {
      console.log('new password:' + this.dto.password);
      console.log('new otp:' + this.dto.otp);
      console.log('username: ' + this.__loginService.getLoginInfo());
      this.dto.username = this.__loginService.getLoginInfo();
      this.__loginService.doUpdatePassword(this.dto).subscribe(
        (data) => {
          console.log(data);
          if (data) {
            this.router.navigate(['login']);
          }
        },
        (err) => {
          console.log('Error ' + err);
        }
      );
    }
  }

}
