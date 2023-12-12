import { Injectable } from '@angular/core';
import { Logininfo } from '../logininfo';
import { HttpClient } from '@angular/common/http';
import { Login } from '../dto/login-request';
import { Observable } from 'rxjs';
import { SendMail } from '../dto/send-mail';
import { ResetPassword } from '../dto/reset-password';
import { RegisterUser } from '../dto/register-user';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  login: Logininfo = new Logininfo();
  constructor(private api: HttpClient) {}
  contextPath = 'http://localhost:6754/';
  checkUserEndPoint = this.contextPath + 'jwt/authenticate';
  checkUserNameEndPoint = this.contextPath + 'login/validate';
  sendMailEndPoint = this.contextPath + 'login/sendmail';
  updatePasswordEndPoint = this.contextPath + 'login/changepassword';
  createDriverEndPoint = this.contextPath + 'driver/register';
  createCustomerEndPoint = this.contextPath + 'customer/register/customer';
  doLoginCheck(dto: Login): Observable<any> {
    return this.api.post<any>(`${this.checkUserEndPoint}`, dto);
  }
  doUserNameCheck(dto: Login): Observable<any> {
    return this.api.post<any>(`${this.checkUserNameEndPoint}`, dto);
  }
  doSendMail(dto: SendMail): Observable<any> {
    return this.api.post<any>(`${this.sendMailEndPoint}`, dto);
  }
  doUpdatePassword(dto: ResetPassword): Observable<any> {
    console.log(dto);
    return this.api.put<any>(`${this.updatePasswordEndPoint}`, dto);
  }
  setLoginInfo(username: string) {
    this.login.username = username;
  }
  getLoginInfo() {
    return this.login.username;
  }
  setLoginState(isLogin: boolean) {
    this.login.isLogin = isLogin;
  }
  getLoginState(){
    return this.login.username;
  }
  doRegister(dto: RegisterUser): Observable<any> {
    if (dto.userrole === 'Driver') {
      return this.api.post<any>(`${this.createDriverEndPoint}`, dto);
    } else {
      return this.api.post<any>(`${this.createCustomerEndPoint}`, dto);
    }
  }
}
