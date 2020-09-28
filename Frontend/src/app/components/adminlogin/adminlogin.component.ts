import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {SignInDataAdmin } from'../../models/SignInData'
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit { 
  loginForm: FormGroup; 
   public isAuthenticatedAdmin = false;
  constructor(private formBuilder: FormBuilder,private router: Router,private adminService: AuthService) {
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
    });
   }
   
  ngOnInit(): void {}
  submitted:any ;
    doAdminLogin() { 
      const signInDataA = new SignInDataAdmin(this.loginForm.value.email, this.loginForm.value.password)
      this.submitted = true;
      this.adminService.doAdminLogin(this.loginForm.value).subscribe(result => {
        console.log(this.loginForm.value);
        localStorage.setItem('adminData', JSON.stringify(result));
      this.adminService.doAdminLogin(signInDataA);
        //this.router.navigate(['/']);
        alert('Logged in as Admin');
        this.router.navigate(['adminview']);
        this.isAuthenticatedAdmin=true;
      
        
      }, (error) => {
        console.log(error);
        alert("Email Id or Password is wrong!!")
        
        
      },
   
     
      
      );
    
  }

}
