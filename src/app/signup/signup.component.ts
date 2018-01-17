import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../service/validate/validate.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name: string;
  username: string;
  email: string;
  password: string;

  constructor(private _validateService: ValidateService) { }
 

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
      console.log("Please fill in all fields");
      return false;
    }
    // Validate Email
    if(!this._validateService.validateEmail(user.email)) {
      console.log("Please use a valid email");
      return false;
    }
  }

}
