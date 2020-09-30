import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingserviceService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  
  email :string = sessionStorage.getItem('useremail');
  constructor(private http:HttpClient) { }
  baseUrl : string = "https://localhost:44374/api/booking";
  bookingDetails(){
    let data={id:this.email};
    return this.http.get<any>(this.baseUrl,{params:data});
  }
    ticketDetails(bookid)
    {
      return this.http.get<any>(this.baseUrl+"/tickets/"+bookid);
    }
  

}