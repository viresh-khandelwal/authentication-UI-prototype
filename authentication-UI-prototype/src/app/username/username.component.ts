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
  spinner:boolean = false;
  constructor(
    private usernameService: UsernameService,
    private authenticationService: AuthenticationService,
    private router: Router) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.userNameForm = new FormGroup({
      userName: new FormControl('', [Validators.required, Validators.minLength(5)]),
      rememberMe: new FormControl(false)
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
      this.spinner = true;
      this.authenticationService.userNameToBeValidated = this.userNameForm.value.userName;
      this.router.navigate(['password']).then((res) => {
        this.hideSpinner();  
      }, (err) => { 
        this.hideSpinner();      
        if(err.status == 401){
          this.userNameError = "The username that you entered does not match our records , please try again."
        }
      });
    }else{
      this.handleInputBlur();
    }
  }

  hideSpinner(): void{
    this.spinner = false;
  }
}
