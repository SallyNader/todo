import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SignService {

  constructor(private _http: Http) { }

  addUser(newUser)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/Auth', newUser, {headers: headers})
      .map(res => res.json());
  }

}