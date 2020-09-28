import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  UserName:string
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(){
    this.UserName=sessionStorage.getItem('userName');
  }
  get isLoggedIn(){return this.authService.isLoggedIn()};
  Logout()
  {
    this.authService.Logout();
    this.router.navigate(['home']);
  }
}
