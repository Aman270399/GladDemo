import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flight } from 'src/app/models/flight';
import {Router} from '@angular/router';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {
  addFlight: FormGroup

  constructor(private builder : FormBuilder, private service: FlightlistService,public route:Router) { }

  ngOnInit(): void {
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
  onSubmit(form :any){
    console.log(form);
  
    this.service.Addflight(form).subscribe(data=>{
      console.log(data)
      window.location.reload();
      alert("Flight Added Successfully");
      
    })
    }

}
