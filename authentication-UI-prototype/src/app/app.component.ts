import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authentication-UI-prototype';

  constructor(
    private router: Router
  ){}

  ngOnInit(){
    if(localStorage.getItem('access_token')){
      this.router.navigate(['password']).then((res) => {}, (err) => {});
    }
  }
}
