import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-passengerdetails',
  templateUrl: './passengerdetails.component.html',
  styleUrls: ['./passengerdetails.component.css']
})
export class PassengerdetailsComponent implements OnInit {
adultpassengercount:number;
childpassengercount:number;
infantpassengercount:number;
dynamicForm: FormGroup;
    submitted = false;
  constructor() { }

  ngOnInit(): void {
    this.adultpassengercount=+localStorage.getItem('adultpassengercount');
    this.childpassengercount=+localStorage.getItem('childpassengercount');
    this.infantpassengercount=+localStorage.getItem('infantpassengercount');
    console.log(this.childpassengercount);
    console.log(this.adultpassengercount);
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
 
  }
  onSubmit() {}
  

    
}
