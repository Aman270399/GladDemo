import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';
import {Admin} from '../models/Admin';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
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
    if (sessionStorage.getItem('userData')) {
      return true;
    }
    return false;
  }
  Logout()
  {
        sessionStorage.removeItem('userData');
        this.getLoggedInName.next('');
  }
  doAdminLogin(data) {
    console.log(data);
    return this.http.post<Admin>(this.API_URI+"/adminlogin", data);
  }
}
