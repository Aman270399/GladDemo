import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {airportlist} from '../models/airportlist';

@Injectable({
  providedIn: 'root'
})
export class AirportlistService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseUrl : string="http://localhost:3000/users";
  constructor(private http:HttpClient) { }
  getAllUser(){
    return this.http.get(this.baseUrl);
   }
}
