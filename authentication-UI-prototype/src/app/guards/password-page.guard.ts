import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
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
    return this.authenticationService.authenticateUserName('viresh');
  }
}
