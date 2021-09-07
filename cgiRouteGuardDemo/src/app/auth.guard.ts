import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor (private _routes:Router)
  {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      if(localStorage.getItem('username')!=null)
      {     
          return true;
      }
      else
      {
      this._routes.navigate(['/login']);
      return false;
      }
  }
  
}
