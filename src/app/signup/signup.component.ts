import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../service/validate/validate.service';
import { AuthService } from '../service/auth/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { Router } from '@angular/router/src/config';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ValidateService, AuthService]
})
export class SignupComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private _validateService: ValidateService, 
    private _flashMessages: FlashMessagesService,
    private _authService: AuthService,
    private _router: Router
  ) { }
 

  ngOnInit() {
  }
  onRegisterSubmit()
  {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    // Required Fields
    if(!this._validateService.valideRegister(user)) {
      this._flashMessages.show("Please fill in all fields", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
    // Validate Email
    if(!this._validateService.validateEmail(user.email)) {
      this._flashMessages.show("Please use a valid email", {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }
  }

}
