import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AirportlistService } from 'src/app/services/airportlist.service';
import {airportlist} from 'src/app/models/airportlist';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  airports:any;
  SearchForm:FormGroup;
  data:any;
  constructor(private formbulider: FormBuilder,private airportservice:AirportlistService,private router:Router) { }

  ngOnInit(): void {
    this.airportservice.getallairports().subscribe(data=>{
      this.airports=data;
      console.log(this.airports); });
   
    this.SearchForm = this.formbulider.group({  
      flighttype:['',Validators.required], 
      source: ['',Validators.required],    
      destination: ['' ,Validators.required],    
      departdate: ['',Validators.required],   
      returndate: ['',Validators.required], 
      adultpassengercount:['',Validators.required],
      childpassengercount:['',Validators.required],
      infantpassengercount:['',Validators.required],
      seatclass:['',Validators.required],
    }); 
   
  }
  textBoxDisabled:boolean;
  type:string;
  disable(){
   this.type="oneway";
    this.textBoxDisabled = true;
  }
  enable(){
    this.type="twoway"
     this.textBoxDisabled = null;
  }

  submitted:any;
  onSubmit(form){
    this.submitted=true;
    console.log(form.source);  
    localStorage.setItem('type',form.flighttype);
    localStorage.setItem('source',form.source);
    localStorage.setItem('destination',form.destination);
    localStorage.setItem('departdate',form.departdate);
    localStorage.setItem('returndate', form.returndate);
    localStorage.setItem('adultpassengercount',form.adultpassengercount);
    localStorage.setItem('childpassengercount',form.childpassengercount);
    localStorage.setItem('infantpassengercount',form.infantpassengercount);
  
   this.router.navigate(['flightSelect']);
    }


}
