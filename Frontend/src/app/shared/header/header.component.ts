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
  userName:any;
  constructor(private authService:AuthService,private router:Router) { }
  ngOnInit(){
    this.authService.getLoggedInName.subscribe(name => this.userName = name);
  }
  get isLoggedIn(){return this.authService.isLoggedIn()};
  Logout()
  {
    this.authService.Logout();
    this.router.navigate(['home']);
  }
}
