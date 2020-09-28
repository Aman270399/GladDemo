import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardService } from '../services/authguard.service';
import {Location} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UnauthorizedGuard implements CanActivate {
  constructor(private Auth: AuthguardService,private router : Router,private _location: Location){
  }
  canActivate(): boolean {  
    if (this.Auth.gettoken()) {  
      this._location.back(); 
        return false; 
    }  
    return true;
  }
}
