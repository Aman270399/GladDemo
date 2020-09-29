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
  departdate: any;
  returndate: any;
  today = new Date();
  source: string;
  destination: string;
  todayShort = new Date().toISOString().slice(0,10);
  constructor(private formbulider: FormBuilder,private airportservice:AirportlistService,private router:Router) { }

  ngOnInit(): void {
   // localStorage.clear();
    this.airportservice.getallairports().subscribe(data=>{
      this.airports=data;
      console.log(this.airports); });
   
    this.SearchForm = this.formbulider.group({  
      flighttype:['',Validators.required], 
      source:['',Validators.required],    
      destination:['' ,Validators.required],    
      departdate:['',Validators.required],   
      returndate:[''], 
      adultpassengercount:['',[Validators.required,Validators.pattern("[0-9]+")]],
      childpassengercount:['',Validators.pattern("[0-9]*")],
      infantpassengercount:['',Validators.pattern("[0-9]*")],
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

  submitted:any=true;
  onSubmit(form){
    console.log(form.source);  
    localStorage.setItem('type',form.flighttype);
    localStorage.setItem('source', form.source);
    localStorage.setItem('destination',form.destination);
    localStorage.setItem('departdate',form.departdate);
    localStorage.setItem('returndate', form.returndate);
    localStorage.setItem('adultpassengercount',form.adultpassengercount);
    localStorage.setItem('childpassengercount',form.childpassengercount);
    localStorage.setItem('infantpassengercount',form.infantpassengercount);
    //console.log(this.SearchForm.valid);
   this.router.navigate(['flightSelect']);
    }


}
