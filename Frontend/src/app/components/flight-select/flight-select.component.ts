import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-select',
  templateUrl: './flight-select.component.html',
  styleUrls: ['./flight-select.component.css']
})
export class FlightSelectComponent implements OnInit {

  constructor() { }
  isRound:boolean;
  ngOnInit(): void {
    this.isRound=localStorage.getItem("type")=="roundtrip"?true:false;
  }

}
