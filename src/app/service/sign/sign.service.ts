import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class SignService {

  constructor(private _http: Http) { }
  options: RequestOptions = new RequestOptions();

  register(username, password)
  {
    const url = "http://localhost:8888/signup",
          credentials = {
            username: username,
            password: password
          };
    this.options.withCredentials = true;
    return this._http.post(url, credentials, this.options)
      .map((response: Response) => {
        return response.json();
      });
  } 
  addUser(newUser)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/signup', newUser, {headers: headers})
      .map(res => res.json());
  }

}
