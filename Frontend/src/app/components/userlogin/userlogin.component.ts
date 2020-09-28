import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  loginForm: FormGroup;
  user:User;
  
  constructor(private formBuilder: FormBuilder,private userService: AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
    });
   }
   
  
  ngOnInit(): void {
    this.userService.Logout();
  }
  submitted:any ;
  doLogin() {
    this.submitted = true;
    this.userService.doLogin(this.loginForm.value).subscribe(result => {
      console.log(this.loginForm.value);
      this.userService.getLoggedInName.next(result.FirstName);
      sessionStorage.setItem('userData',result.toString());
      //this.router.navigate(['/dbData']);
      alert('Logged in as a User');
    }, (error) => {
      console.log(error);
      alert("Email Id or Password is wrong!!")
    });
    
  }

}
