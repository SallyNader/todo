import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  authToken: any;
  user: any;

  constructor(private _http:  Http) { }

  //check if user logged in , so it remove login and register from route
  loggedIn()
  {
    return tokenNotExpired('id_token');
  }
  registerUser(user)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post("http://localhost:8888/user/register", user,{headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user)
  {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this._http.post("http://localhost:8888/user/authenticate", user, {headers: headers})
      .map(res => res.json());
  }

  getProfile()
  {
    let headers = new Headers();
    this.loadToken();
    headers.append("Authorization", this.authToken);
    headers.append("Content-Type", "application/json");
    return this._http.get("http://localhost:8888/user/profile", {headers: headers})
      .map(res => res.json());
  }
  
  loadToken()
  {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  storeUserData(token, user)
  {
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }   
  logout()
  {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

}
