import { Component, OnInit } from '@angular/core';
import { flight } from 'src/app/models/flight';
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
  ReturnFlights:flight[];
  constructor(private flightlistservice:FlightlistService) { }
  isReturn:boolean;
  ngOnInit(): void {
    this.source=localStorage.getItem('source');
    this.destination=localStorage.getItem('destination');
    this.departdate=localStorage.getItem('departdate');
    this.returndate=localStorage.getItem('returndate');
    this.isReturn=localStorage.getItem("type")=="roundtrip"?true:false;
    this.flightlistservice.searchFlight(this.source,this.destination,this.departdate).subscribe(data=>{
      this.Flights=data;
       console.log(this.Flights); });
    if(this.isReturn)
    {
      this.flightlistservice.searchFlight(this.destination,this.source,this.returndate).subscribe(data=>{
        this.ReturnFlights=data;
         console.log(this.ReturnFlights); });

    }
  }

}
