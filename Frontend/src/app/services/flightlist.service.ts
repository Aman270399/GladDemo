import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';
import {flight} from '../models/flight';

@Injectable({
  providedIn: 'root'
})
export class FlightlistService {httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
baseUrl : string="https://localhost:44374/api/flights";
constructor(private http:HttpClient) { }
getallflights(){
  return this.http.get(this.baseUrl+"/GetAll");
 }
 Addflight(flights){
   return this.http.post<any>(this.baseUrl,JSON.stringify(flights),this.httpOptions);
 }
 deleteFlight(id){
  return this.http.delete<flight>(this.baseUrl+"\\"+id,this.httpOptions);

}
}
