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
import { AuthGuard }  from "./guard/auth.guard";
import { UserEditComponent } from "./view/pages/user/user-edit/user-edit.component";
import { CreateTaskComponent } from "./view/pages/task/create-task/create-task.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'edit',
        component: UserEditComponent
      }
    ]
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
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
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
