import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/User';
import { Admin} from '../models/Admin';


@Injectable({
  providedIn: 'root'
})
export class AuthService { 
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  API_URI = 'https://localhost:44374/api/accounts';
  isAuthenticatedUser = false;
  isAuthenticatedAdmin = false;
  public getLoggedInName = new Subject();
  constructor(private http: HttpClient) { }
  doLogin(data) {
    console.log(data);
    return this.http.post<User>(this.API_URI+"/userlogin", data);  
  }
  isLoggedIn() {
    if (sessionStorage.getItem('userData') || sessionStorage.getItem('adminData')) {
      return true;
    }
    return false;
  }
  Logout()
  {
    if (sessionStorage.getItem('userData'))
    {
      sessionStorage.removeItem('userData');
    }
    if(sessionStorage.getItem('adminData'))
    {
      sessionStorage.removeItem('adminData');
    }
  }

  doAdminLogin(data) {
    console.log(data);
    return this.http.post<Admin>(this.API_URI+"/adminlogin", data);
  }
  forgotUserPassword(email){
    return this.http.post<any>(this.API_URI+"/sendMail",JSON.stringify(email),this.httpOptions)
  }
  otpverfiy(mobileno){
    return this.http.post<Number>(this.API_URI+'/sendMsg/',JSON.stringify(mobileno))
  }
}
