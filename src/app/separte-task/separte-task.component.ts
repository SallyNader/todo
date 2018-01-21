import { Component, OnInit } from '@angular/core';
import { GetTaskService } from '../service/get-task.service';
import { Task } from '../Task';
import { Http, Headers } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-separte-task',
  templateUrl: './separte-task.component.html',
  styleUrls: ['./separte-task.component.css'],
  providers:[GetTaskService]
})
export class SeparteTaskComponent implements OnInit {
  task: Task;
  taskName: String;
  date: Date;
  priority: Number;
  id= '';
  showForm: boolean = false;
  

  constructor(
    private _taskService: GetTaskService,
    private _http: Http,
    private route: ActivatedRoute,
    private _router: Router
  ) { 
      this.id = this.route.snapshot.params.id;
     
  }

  ngOnInit() {
          
    this.getOneTask(this.id);
     
  }

  //to hide and show update form when click on update button
  toggleShow()
  {
    this.showForm =!(this.showForm);
  }

  getOneTask(id)
  {
    this._taskService.getOneTask(id)
      .subscribe(data => {
        this.task = data;
        this.taskName = data.taskName;
        this.priority = data.priority;
        this.date = data.date;
        console.log(this.taskName);
      });
  }
  updateTask(id)
  {
    let updatedTask = {
      taskName: this.taskName,
      date: this.date,
      priority: this.priority
    };
    this._taskService.updateTask(this.id, updatedTask)
      .subscribe(task => {
        this.task = task;         
        console.log(this.task);
      });  
  }
}
