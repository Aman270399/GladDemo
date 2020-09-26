import { Component, OnInit } from '@angular/core';
//import { FormGroup } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  addUser : FormGroup
  constructor(private builder : FormBuilder, private service:UserService) { }

  ngOnInit(): void {
    this.addUser= this.builder.group({
      Title:["",Validators.required],
      FirstName:["",Validators.required],
      LastName:["",Validators.required],
      UserEmailId:["",[Validators.required,Validators.email]],
      Age : ["",[Validators.required]],
      MobileNumber : ["",[Validators.required]],
      Password : ["",[Validators.required]],
      DateOfBirth:["",[Validators.required]]

      
    })
  }
  onSubmit(form : any){
    console.log(form);
  
    this.service.addUser(form).subscribe(data=>{
      console.log(data)
      window.location.reload();
      alert("User Added Successfully");
      
    })
    }

}
