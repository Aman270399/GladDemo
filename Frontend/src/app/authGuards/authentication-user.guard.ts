import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationUserGuard implements CanActivate {
  constructor(private Auth: AuthguardService,private router : Router){

  }
  canActivate(): boolean {  
    if (!this.Auth.gettoken()) {  
        this.router.navigateByUrl("/userlogin");  
        return false;
    }  
    return this.Auth.gettoken();
  }
  
}
