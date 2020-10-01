import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { flight, flight1 } from 'src/app/models/flight';
import { AuthService } from 'src/app/services/auth.service';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {
  source:string;
  destination:string;
  departDate:string;
  returnDate:String;
  flights:flight1[];
  passengerCount:number;
  returnFlights:flight1[];
  selected:boolean=false;
  returnSelected:boolean=false;
  constructor(private flightlistservice:FlightlistService,public router:Router,private authservice:AuthService) { }
  isReturn:boolean;
  ngOnInit(): void {
    sessionStorage.removeItem('flight');
    sessionStorage.removeItem('returnflight');
    this.source=localStorage.getItem('source');
    this.destination=localStorage.getItem('destination');
    this.departDate=localStorage.getItem('departdate');
    this.returnDate=localStorage.getItem('returndate');
    this.passengerCount=+localStorage.getItem('adultpassengercount')+(+localStorage.getItem('childpassengercount'));
    this.isReturn=localStorage.getItem("type")=="roundtrip"?true:false;
    this.flightlistservice.searchFlight(this.source,this.destination,this.departDate,this.passengerCount).subscribe(data=>{
      this.flights=data;
       console.log(this.flights); });
    if(this.isReturn)
    {
      this.flightlistservice.searchFlight(this.destination,this.source,this.returnDate,this.passengerCount).subscribe(data=>{
        this.returnFlights=data;
         console.log(this.returnFlights); });

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
  selectReturnFlight(returnFlight:flight1)
{
  this.returnSelected=true;
 sessionStorage.setItem('returnflight',JSON.stringify(returnFlight));
}
  selectFlight(flight:flight)
  {
    this.selected=true;
    sessionStorage.setItem('flight',JSON.stringify(flight));
  }
}
