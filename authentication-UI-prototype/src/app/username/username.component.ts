import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  userNameForm: FormGroup;
  userNameError: string;
  constructor() { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void{
    this.userNameForm = new FormGroup({
      userName : new FormControl('',[Validators.required])
    })
  }

  handleInputBlur(): void{
    if(this.userNameForm.controls.userName.errors.required){
      this.userNameError = "please enter your user name";
    }
  }

  handleInputFocus(): void{
    this.userNameError = '';
  }

  handleSubmit(): void{
  }

}
