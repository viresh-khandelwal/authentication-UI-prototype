import { Injectable } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service'

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  constructor(private authenticationService: AuthenticationService) { }

  authenticateUsername(username){
    return this.authenticationService.authenticateUserName(username);
  }
}
