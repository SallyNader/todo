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
  getOneTask(taskID)
  {
    return this._http.get('http://localhost:8888/task/'+taskID)
      .map(res => res.json());
  }
  addTask(newTask)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.post('http://localhost:8888/task',newTask, {headers: headers})
      .map( res => res.json());
  }

  deleteTask(id)
  {
    return this._http.delete('http://localhost:8888/task/'+id)
      .map(res => res.json());
  }

  updateTask(id, updatedTask)
  {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this._http.put('http://localhost:8888/task/'+id, updatedTask, {headers:headers})
      .map(res => res.json());

  }
}
