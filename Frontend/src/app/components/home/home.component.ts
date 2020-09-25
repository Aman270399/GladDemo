import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AirportlistService } from 'src/app/services/airportlist.service';

import {airportlist} from 'src/app/models/airportlist';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  airports:airportlist[];
  SearchForm:FormGroup;
  cities:any=['Delhi','Mumbai'];
  constructor(private formbulider: FormBuilder) { }

  ngOnInit(): void {
    this.SearchForm = this.formbulider.group({    
      source: [''],    
      destination: [''],    
      departdate: [''],   
      returndate: [''], 
      adultpassengercount:[''],
      childpassengercount:[''],
      infantpassengercount:[''],
    }); 
    //this.airportservice.getAllUser()._subscribe<airportlist> (data=>{this.airports=data;});
  }
  
  onSubmit(form){
    console.log(form);  
    }

   /*  textBoxDisabled = true;
    toggle(){
      this.textBoxDisabled = !this.textBoxDisabled;
    }
 */

}
