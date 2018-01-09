import { Component, OnInit } from '@angular/core';
import { GetTaskService } from '../service/get-task.service';
import { Task } from '../Task';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
  providers:[GetTaskService]
})
export class TasksComponent implements OnInit {
  tasks : Task[];
  task: Task;
  taskName: string;
  date: Date;
  priority: Number;
  taskID: string;

  constructor(private _taskService: GetTaskService, private _http: Http) { }
  

  ngOnInit() 
  {
    this._taskService.getTask()
      .subscribe(tasks => 
        this.tasks = tasks);
  }
  addTask()
  {
    const newTask = {
      taskName: this.taskName,
      date: this.date,
      priority: this.priority
    }
    this._taskService.addTask(newTask)
      .subscribe( task => {
        this.tasks.push(task);        
      });

  }
  deleteTask(id)
  {
    var tasks = this.tasks;
    this._taskService.deleteTask(id)
      .subscribe(data => {
        for(var i=0; i< tasks.length;i++){
          if(tasks[i]._id == id)
          {
            tasks.splice(i,1);
          }
        }
      });
  }
  updateTask()
  {
    var data = {
      id: this.taskID,
      taskName: this.taskName,
      priority: this.priority 
    }
    this._http.put('http://localhost:8888/task/'+data.id, data)
      .subscribe(res => res.json());
  }     

}
