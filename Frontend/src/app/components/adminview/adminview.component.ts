import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { flight } from 'src/app/models/flight';
import { FlightSchedule } from 'src/app/models/FlightSchedule';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
flights:flight[]; 
ScheduleDate:Date;
seats:any; 
flightdate: any;
today = new Date();
flight:FormGroup; 
query:string;
flightschedule : FlightSchedule ;

  constructor(private route: Router, private builder : FormBuilder,private service:FlightlistService) { }
  ngOnInit(): void {
    this.service.getallflights().subscribe(data=>{
      this.flights=data;
     console.log(this.flights);
     }); 
     this.flight= this.builder.group({
      FlightId:["",Validators.required],
      ScheduleDate:["",Validators.required],   
    });
     console.log(this.query);
  }
  redirectaddflight(){
    this.route.navigate(['addflight'])

  }
  redirectdeleteflight(){
    this.route.navigate(['deleteflight'])

  } 
  onSubmit(form:any){
    console.log(form.ScheduleDate);
    this.seats = 120; 
    this.flightschedule= new FlightSchedule(form.ScheduleDate,form.FlightId,this.seats);
    this.service.addflightschedule(this.flightschedule).subscribe(data=>{});
    console.log(this.flightschedule);
   }

}
