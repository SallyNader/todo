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
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component'; 
import { ValidateService } from './service/validate/validate.service';
const routes  = [
  {path: 'separet/:id' , component: SeparteTaskComponent},
  {path: 'home' , component: TasksComponent},
  {path: 'home2', component: HomeComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {
    path: 'auth',
    children : [
      {path: 'login', component:LoginComponent},
      {path: 'signup', component: SignupComponent}
    ]
  }  
];

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    SeparteTaskComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    RouterModule.forRoot(routes),    
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [
    GetTaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
