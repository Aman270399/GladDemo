import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BookingserviceService} from '../../services/bookingservice.service'

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  bookings : any; 
  /*"BookingId": "12345",
    "UserEmailId": "aman27399@gmail.com",
    "DateBooking": "2020-12-12T00:00:00",
    "TransactionId": "21345",
    "TotalPrice": 23500.00,
    "TotalPassenger": 4,
    "BookStatus": "Confirmed"*/
    myDate = new Date();
  constructor(private bookingdetail :BookingserviceService,private http : HttpClient, private route: Router) {}
    

  ngOnInit(): void {
    this.bookingdetail.bookingDetails().subscribe(data=>{this.bookings=data;console.log(this.bookings)});
    
  }
  tickets:any;  //to store subscribed values
  trial:any;  //to store booking id of a user
  check: boolean =false;  //to put condition to display details
 status:any="confirmed";
  details(id)
  {
     this.trial=id;
     this.bookingdetail.ticketDetails(id).subscribe(data=>{this.tickets=data;})
      this.check=!this.check;
      console.log(this.tickets.DateTravel);
  }
  
}
