import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { GetTaskService } from './service/get-task.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SeparteTaskComponent } from './separte-task/separte-task.component'; 

const routes  = [
  {path: 'separet/:id' , component: SeparteTaskComponent},
  {path: 'home' , component: TasksComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SeparteTaskComponent
  ],
  imports: [
    RouterModule.forRoot(routes),    
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [GetTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
