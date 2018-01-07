import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { GetTaskService } from './service/get-task.service';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [    
    BrowserModule,
    HttpModule
  ],
  providers: [GetTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
