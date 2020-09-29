import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight } from 'src/app/models/flight';
import { AuthService } from 'src/app/services/auth.service';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {
  source:string;
  destination:String;
  departdate:string;
  returndate:String;
  Flights:flight[];
  passengercount:number;
  ReturnFlights:flight[];
  constructor(private flightlistservice:FlightlistService,public router:Router,private authservice:AuthService) { }
  isReturn:boolean;
  ngOnInit(): void {
    this.source=localStorage.getItem('source');
    this.destination=localStorage.getItem('destination');
    this.departdate=localStorage.getItem('departdate');
    this.returndate=localStorage.getItem('returndate');
    this.passengercount=+localStorage.getItem('adultpassengercount')+(+localStorage.getItem('childpassengercount'));
    this.isReturn=localStorage.getItem("type")=="roundtrip"?true:false;
    this.flightlistservice.searchFlight(this.source,this.destination,this.departdate,this.passengercount).subscribe(data=>{
      this.Flights=data;
       console.log(this.Flights); });
    if(this.isReturn)
    {
      this.flightlistservice.searchFlight(this.destination,this.source,this.returndate,this.passengercount).subscribe(data=>{
        this.ReturnFlights=data;
         console.log(this.ReturnFlights); });

    }
  }
  get isLoggedIn(){return this.authservice.isLoggedIn()};
  continue()
  {
    if(this.isLoggedIn==false)
       this.router.navigate(['/userlogin',{flightSelect:true}]);
    else
       this.router.navigate(['/passengerdetail']);
  }
}
