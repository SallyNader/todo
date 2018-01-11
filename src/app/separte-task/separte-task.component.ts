import { Component, OnInit } from '@angular/core';
import { GetTaskService } from '../service/get-task.service';
import { Task } from '../Task';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-separte-task',
  templateUrl: './separte-task.component.html',
  styleUrls: ['./separte-task.component.css'],
  providers:[GetTaskService]
})
export class SeparteTaskComponent implements OnInit {
  task: Task;
  id= '';

  constructor(private _taskService: GetTaskService, private _http: Http, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;    
    this.getOneTask(this.id);
  }
  getOneTask(id)
  {
    this._taskService.getOneTask(id)
    .subscribe(task => this.task = task);
  }

}
