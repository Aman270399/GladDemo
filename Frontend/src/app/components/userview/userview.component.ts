import { HttpClient } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
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
  constructor(private bookingdetail :BookingserviceService,private http : HttpClient, private route: Router) { }

  ngOnInit(): void {
    
    this.bookingdetail.bookingDetails().subscribe(data=>{this.bookings=data;console.log(this.bookings)})
  }

  tickets:any;
  trial:any;
  details(id){
this.trial=id;

//this.bookingdetail.ticketDetails(id).subscribe(data=>{this.tickets=data;})

  }
  
}
