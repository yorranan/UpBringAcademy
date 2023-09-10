import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./view/pages/dashboard/dashboard.component";
import { TaskComponent } from "./view/pages/task/task/task.component";
import { UserComponent } from "./view/pages/user/user/user.component";
import { GratificationComponent } from "./view/pages/gratification/gratification/gratification.component";
import { LoginComponent } from "./view/pages/authentication/login/login.component";
import { RegisterComponent } from "./view/pages/authentication/register/register.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'gratification',
    component: GratificationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
