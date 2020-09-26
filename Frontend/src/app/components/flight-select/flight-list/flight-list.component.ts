import { Component, OnInit } from '@angular/core';
import {flight} from 'src/app/models/flight'
@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})
export class FlightListComponent implements OnInit {
  Flight:flight[]=[{FlightId:'AA807',SourceId:'101',DestinationId:'102',DepartTime:'12:00:00',ArrivalTime:"02:00:00",Duration:"02:00:00",EconomyPrice:7689,BusinessPrice:24678},
  {FlightId:'AA707',SourceId:'102',DestinationId:'101',DepartTime:'12:00:00',ArrivalTime:"02:00:00",Duration:"02:00:00",EconomyPrice:7689,BusinessPrice:24678}];

  constructor() { }

  ngOnInit(): void {
  }

}
