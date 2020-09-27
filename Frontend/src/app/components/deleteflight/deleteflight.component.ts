import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { flight } from 'src/app/models/flight';
import { Router } from '@angular/router';
import { FlightlistService } from 'src/app/services/flightlist.service';

@Component({
  selector: 'app-deleteflight',
  templateUrl: './deleteflight.component.html',
  styleUrls: ['./deleteflight.component.css']
})
export class DeleteflightComponent implements OnInit {
  Deleteflight: FormGroup
  constructor(private builder : FormBuilder, private service: FlightlistService,public route: Router) { }

  ngOnInit(): void {
    this.Deleteflight= this.builder.group({
      FlightId:["",Validators.required]
    })
  }
  onSubmit(form :flight){
    console.log(form);
  this.service.deleteFlight(form).subscribe(data=>{
  console.log(data);
  window.location.reload();
      alert("Flight Deleted Successfully");
})
  }

}
