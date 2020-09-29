import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit { 
  loginForm: FormGroup; 
  
  constructor(private formBuilder: FormBuilder,private router: Router,private adminService: AuthService) { }
   
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
    });
    this.adminService.Logout();
  }
  submitted:any ;
    doAdminLogin() { 
      
      this.submitted = true;
      this.adminService.doAdminLogin(this.loginForm.value).subscribe(result => {
        console.log(this.loginForm.value);
        this.adminService.getLoggedInName.next(result.FirstName);
        sessionStorage.setItem('adminData',JSON.stringify(result.AdminEmailId));
        //this.router.navigate(['/']);
        alert('Logged in as Admin');
        this.router.navigate(['adminview']);  
      }, (error) => {
        console.log(error);
        alert("Email Id or Password is wrong!!")
      },
      );
  }
}
