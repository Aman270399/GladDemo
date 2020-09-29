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
    return this.http.post<any>(this.baseUrl,JSON.stringify(user),this.httpOptions);
  }
  getUserById(id:string){
    return this.http.get<User>(this.baseUrl+'id',this.httpOptions);
  }
  userUpdate(user:User,data){
    const newDetail={
      "Password": user.Password,
      "UserEmailId":user.UserEmailId,
      "Title":user.Title,
      "Age":user.Age,
      "MobileNumber":user.MobileNumber,
      "FirstName": user.FirstName,
      "LastName": user.LastName,
      "DateOFBirth":user.DateOFBirth
    }
    return this.http.put(this.baseUrl+'/'+user.UserEmailId, JSON.stringify(newDetail),this.httpOptions);
  }
}
