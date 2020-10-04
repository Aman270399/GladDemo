import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import {BookingserviceService} from '../../services/bookingservice.service'

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.css']
})
export class UserviewComponent implements OnInit {
  bookings : any; 
 
    myDate = new Date();
  constructor(private bookingdetail :BookingserviceService,private http : HttpClient, private route: Router) {}
    
  todayShort = new Date().toISOString().slice(0,10);
  presenttime=new Date().getTime();
  ngOnInit(): void {
    this.bookingdetail.bookingDetails().subscribe(data=>{this.bookings=data;console.log(this.bookings)});
    console.log( new Date().getHours());
    console.log( new Date().getMinutes());
    console.log(this.todayShort);
  }
  tickets:any;  //to store subscribed values
  trial:any;  //to store booking id of a user
  check: boolean =false;  //to put condition to display details
 status:any="confirmed";
 booktable:any;
  details(id,booking)
  {
     this.trial=id;
     this.booktable=booking;
     this.bookingdetail.ticketDetails(id).subscribe(data=>{this.tickets=data;console.log(this.tickets[0].DepartTime);})
      this.check=!this.check;     
  }
  tickter:any;

  idpass(tickets){
    this.tickter=tickets;
    console.log(this.tickter);
  }
  ondelete(ticket){
    ticket.DateCancellation=this.todayShort;
    var timeNow=moment(Date.now(),"HH:mm:ss");
    var departTime=moment(ticket.DepartTime,"HH:mm:ss")
    var timeDiff=moment.duration(timeNow.diff(departTime));
    console.log(timeDiff);
    this.bookingdetail.deleteticket(ticket).subscribe(data=>{
      console.log(data)});
     this.booktable.TotalPassenger-=1;
      this.bookingdetail.updatebooking(this.booktable).subscribe(data=>{});
      alert("Your ticket has been cancelled and a refund has been generated!!")

    
  }
  
}
