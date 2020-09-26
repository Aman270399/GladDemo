import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http:HttpClient) { }
  baseUrl : string = "https://localhost:44374/api/users";
  addUser(user){
    return this.http.post<User>(this.baseUrl,JSON.stringify(user),this.httpOptions);
  }
}
