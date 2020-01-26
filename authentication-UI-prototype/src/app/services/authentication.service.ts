import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { tap, map } from 'rxjs/operators';
import { pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  userData:any;
  userToken:any;

  constructor(
    private httpClient: HttpClient
  ) { }
  authenticateUserName(): Observable<boolean>{
    return this.httpClient.post('/api/authenticateUsername', {'userData':this.userData}).pipe(
      map((response:any) => {
        console.log(response);
        if(response.status === 'valid'){
          if(response.token !== ''){
            this.userToken = response.token;
            localStorage.setItem('access_token', response.token);
          }
          return true;
        }else{
          return false;
        }
      })
    );
    //this.httpClient.post('http://localhost:8080',username).pipe(tap((response) => true));
  }
}
