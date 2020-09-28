import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URI = 'https://localhost:44374/api/accounts';
  isAuthenticatedUser = false;
  isAuthenticatedAdmin = false;
  constructor(private http: HttpClient) { }
  doLogin(data) {
    console.log(data);
    return this.http.post(this.API_URI+"/userlogin", data);
    
  }
  isLoggedIn() {
    if (sessionStorage.getItem('userData')) {
      return true;
    }
    return false;
  }
  Logout()
  {

      sessionStorage.removeItem('userData');
  }
  getUserName()
  {
    return sessionStorage.getItem('userData');
  }
  doAdminLogin(data) {
    console.log(data);
    return this.http.post(this.API_URI+"/adminlogin", data);
  }
}
