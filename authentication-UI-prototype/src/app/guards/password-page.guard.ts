import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable, of} from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class PasswordPageGuard implements  CanActivate {
  
  constructor(private authenticationService: AuthenticationService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):Observable<boolean>{
    if(localStorage.getItem('access_token')) {
      return of(true);  //of() converts true to observable containing true
    }else{
      return this.authenticationService.authenticateUserName();
    } 
  }
}
