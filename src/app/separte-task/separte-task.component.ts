import { Component, OnInit } from '@angular/core';
import { GetTaskService } from '../service/get-task.service';
import { Task } from '../Task';
import { Http, Headers } from '@angular/http';


@Component({
  selector: 'app-separte-task',
  templateUrl: './separte-task.component.html',
  styleUrls: ['./separte-task.component.css'],
  providers:[GetTaskService]
})
export class SeparteTaskComponent implements OnInit {
  task: Task;
  constructor(private _taskService: GetTaskService, private _http: Http) { }

  ngOnInit() {
  }
  getOneTask(id)
  {
    this._taskService.getOneTask(id)
      .subscribe(task => this.task = task);
  }

}
