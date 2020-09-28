import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(){
  }
  get isLoggedIn(){return this.authService.isLoggedIn()};
  Logout()
  {
    this.authService.Logout();
    this.router.navigate(['home']);
  }
}
