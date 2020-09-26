import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private userService: AuthService,private router: Router) {
    this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required]],
			password: ['', [Validators.required]]
    });
   }

  ngOnInit(): void {
  }
  doLogin() {
    this.userService.doLogin(this.loginForm.value).subscribe(result => {
      console.log(result);
      localStorage.setItem('userData', JSON.stringify(result));
  
      this.router.navigate(['/dbData']);
      alert('Success');
    }, (error) => {
      console.log(error);
      alert("Unsuccessfull")
    });
    
  }

}
