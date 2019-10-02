import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { tap, map } from 'rxjs/operators';
import { pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userNameToBeValidated:string;
  userToken:any;

  constructor(
    private httpClient: HttpClient
  ) { }
  authenticateUserName(): Observable<boolean>{
    return this.httpClient.post('/api/authenticateUsername', {'username':this.userNameToBeValidated}).pipe(
      map((response:any) => {
        if(response.token){
          this.userToken = response.token;
          return true;
        }else{
          return false;
        }
      })
    );
    //this.httpClient.post('http://localhost:8080',username).pipe(tap((response) => true));
  }
}
