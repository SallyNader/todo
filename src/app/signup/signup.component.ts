import { Component, OnInit } from '@angular/core';
import { SignService } from '../service/sign/sign.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [SignService]
})
export class SignupComponent implements OnInit {

  constructor(private _signupservice: SignService) { }

  ngOnInit() {
  }
  addUser()
  {
    let user = {

    }
    this._signupservice.addUser(user);
  }

}
