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
  userID: string;

  constructor(private _taskService: GetTaskService, private _http: Http) { }
  
  
  ngOnInit() 
  { 
    this.userID = this.getIdOfLoggedUser();
    this._taskService.getTaskBelogsToUser(this.userID)
      .subscribe(user => 
        {
          this.tasks= user.tasks;
          console.log(user.tasks);
        });
  }

  getIdOfLoggedUser()
  {
    const userId = localStorage.getItem('user');
    return JSON.parse(userId).id;
  }    
  addTask()
  {
    const userId = localStorage.getItem('user');
    this.userID = JSON.parse(userId).id;
    console.log(this.userID);
    const newTask = {
      author: this.userID,
      taskName: this.taskName,
      date: this.date,
      priority: this.priority
    }
    this._taskService.addTask(newTask)
      .subscribe( task => {
        this.tasks.push(task);        
      });
    this.taskName = "";
    this.priority = null;
    this.date = null;  
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
