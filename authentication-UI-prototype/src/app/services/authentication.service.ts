import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';
import { tap, map } from 'rxjs/operators';
import { pipe } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private httpClient: HttpClient
  ) { }
  authenticateUserName(username): Observable<boolean>{
    return this.httpClient.post('/api/authenticateUsername', {'username':username}).pipe(map((response:any) => response.userAuthenticated));
   //this.httpClient.post('http://localhost:8080',username).pipe(tap((response) => true));
  }
}
