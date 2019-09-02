import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameService } from './username.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  userNameForm: FormGroup;
  userNameError: string;
  constructor(private usernameService: UsernameService) { }

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
    this.usernameService.authenticateUsername('viru').subscribe(() => alert("hello hi dosto"));
    if(this.userNameForm.status === "VALID"){
      alert('submitFunctionCalled');
    }
  }

}
