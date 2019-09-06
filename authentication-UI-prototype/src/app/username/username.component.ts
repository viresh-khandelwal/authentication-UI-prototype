import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameService } from './username.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  userNameForm: FormGroup;
  userNameError: string;
  constructor(
    private usernameService: UsernameService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userNameForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  handleInputBlur(): void {
    let errors = this.userNameForm.controls.userName.errors;
    if (errors != null) {
      if (errors.required) {
        this.userNameError = "Please enter your user name";
      } else if (errors.minlength) {
        this.userNameError = "The user name is minimum 5 characters long. Please recheck your user name";
      }
    }
  }

  handleInputFocus(): void {
    this.userNameError = '';
  }

  handleSubmit(): void {
    if(this.userNameForm.status === "VALID"){
      this.authenticationService.authenticateUserName(this.userNameForm.value.userName).subscribe(
        (res:any) => {
          if(res){
            this.router.navigate(['password']);
          }else{
            this.userNameError = "The username you entered , doesn't match our records"
          }
        }
      );
    }else{
      this.handleInputBlur();
    }
  }

  //       this.router.navigate(['password', { 'username': this.userNameForm.value.userName }]).then((res) => (console.log(res)), (err) => console.log("error"));
  // to access in route guard :
  // this.activatedRouteSnapshot.data["username"]

}
