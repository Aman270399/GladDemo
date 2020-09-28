import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
      Age : ["",[Validators.required]],
      MobileNumber : ["",[Validators.required,Validators.pattern('[7-9][0-9]{9}')]],
      Password : ["",[Validators.required, Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      DateOfBirth:["",[Validators.required]],
      confirmPass:["",[Validators.required]]
    }, { validator: this.checkPasswords })
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.get('Password').value;
  let confirmPass = group.get('confirmPass').value;
   return pass === confirmPass ? null : { notSame: true }     
  }
  onSubmit(form : User){
    console.log(form);
    
    this.service.addUser(form).subscribe(data=>{
      console.log(data)
     
      alert("User Registered Successfully");
      this.route.navigate(["userlogin"]);
    },(error) => {
      console.log(error);
      alert("Please Enter valid details!!")
    });
    
    }

}
