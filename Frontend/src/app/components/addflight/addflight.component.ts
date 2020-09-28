import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flight } from 'src/app/models/flight';
import {Router} from '@angular/router';
import { FlightlistService } from 'src/app/services/flightlist.service';
import { AirportlistService } from 'src/app/services/airportlist.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  addFlight: FormGroup
  airports:any;
  constructor(private builder : FormBuilder, private service: FlightlistService,public route:Router,private airportservice:AirportlistService) { }

  ngOnInit(): void {
    this.airportservice.getallairports().subscribe(data=>{
      this.airports=data;
     console.log(this.airports);
     });

    this.addFlight= this.builder.group({
      FlightId:["",Validators.required],
      SourceId:["",Validators.required],
      DestinationId:["",[Validators.required]],
      DepartTime: ["",[Validators.required]],
      ArrivalTime : ["",[Validators.required]],
      Duration : ["",[Validators.required]],
      EconomyPrice:["",[Validators.required]],
      BusinessPrice:["",[Validators.required]]
    })
  }
 onSubmit(form:any){
   //console.log(form);
    this.service.Addflight(form).subscribe(data=>{
     // console.log(data);
      alert("Flight Added Successfully");
      this.route.navigate(['adminview']);
    },(error) => {
      console.log(error);
      alert("Please Enter valid details!!")
    });
 }
   

}
