import { Component, OnInit } from '@angular/core';
import { SignService } from '../service/sign/sign.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignService]
})
export class SignupComponent implements OnInit {
  userName: string;
  password: string;

  constructor(private _signupservice: SignService) { }

  ngOnInit() {
  }
  addUser()
  {
    let user = {
      userName: this.userName,
      password: this.password
    }
    this._signupservice.addUser(user).
      subscribe( user => console.log(user));
  }

}
