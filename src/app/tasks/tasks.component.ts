import { Component, OnInit } from '@angular/core';
import { GetTaskService } from '../service/get-task.service';
import { Task } from '../Task';

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

  constructor(private _taskService: GetTaskService) { }
  

  ngOnInit() 
  {
    this._taskService.getTask()
      .subscribe(tasks => 
        this.tasks = tasks);
  }
  addTask()
  {
    const newTask = {
      taskName: this.task,
      date: this.date,
      priority: this.priority
    }
    this._taskService.addTask(newTask)
      .subscribe( task => {
        this.tasks.push(task);        
      });

  }     

}
