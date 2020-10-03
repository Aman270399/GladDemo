import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import * as moment from 'moment';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  todayShort = new Date().toISOString().slice(0,10);
  addUser : FormGroup
  constructor(private builder : FormBuilder, private service:UserService,public route:Router) { }
  ngOnInit(): void {
   
    this.addUser= this.builder.group({
      Title:["",Validators.required],
      FirstName:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      LastName:["",[Validators.required,Validators.pattern('[a-zA-Z]+')]],
      UserEmailId:["",[Validators.required,Validators.email]],
      Age : ["",[Validators.required,Validators.min(18)]],
      MobileNumber : ["",[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
      Password : ["",[Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{7,}'),Validators.minLength(8)]],
      DateOfBirth:["",[Validators.required]],
      confirmPass:["",[Validators.required]]
    }, { validator: this.checkPasswords })
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('Password').value;
  let confirmPass = group.get('confirmPass').value;
   return pass === confirmPass ? null : { notSame: true }     
  }

  get f() { return this.addUser.controls; }
     submitted:boolean=false;
age:any;
  onSubmit(form : User){
    this.submitted = true;
    const today = new Date();
    const birthDate = new Date(form.DateOFBirth);
    form.Age = 21;
    let age=today.getFullYear() - birthDate.getFullYear();
    console.log(form);
    console.log(age);
    
    this.service.addUser(form).subscribe(data=>{
      console.log(data)
      alert("User Registered Successfully");
      this.route.navigate(["userlogin"]); },(error) => {console.log(error.error.Message);
      if(error.error.Message=="Email already exists")
      {
        console.log(error.Message);
        alert("Email already exists");
      }
      else
       alert("Please Enter valid details!!");
    });
    
    }

}
