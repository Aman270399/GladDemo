import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
flights:any;
  constructor(private route: Router, private service:FlightlistService) { }

  ngOnInit(): void {
    this.service.getallflights().subscribe(data=>{
      this.flights=data;
     console.log(this.flights);
     });

  }
  redirectaddflight(){
    this.route.navigate(['addflight'])

  }
  redirectdeleteflight(){
    this.route.navigate(['deleteflight'])

  }

}
