import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetTaskService {

  constructor(private _http: Http) { }
  
  getTask()
  {
    return this._http.get('http://localhost:8888/task')
      .map(res => res.json());
  }
  addTask(newTask)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/task',newTask, {headers: headers})
      .map( res => res.json());

  }
}
