import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./view/pages/dashboard/dashboard.component";
import { TaskComponent } from "./view/pages/task/task/task.component";
import { EditTaskComponent } from "./view/pages/task/edit-task/edit-task.component";
import { UserComponent } from "./view/pages/user/user/user.component";
import { GratificationComponent } from "./view/pages/gratification/gratification/gratification.component";
import { LoginComponent } from "./view/pages/authentication/login/login.component";
import { RegisterComponent } from "./view/pages/authentication/register/register.component";
import { AuthGuard }  from "./guard/auth.guard";
import { UserEditComponent } from "./view/pages/user/user-edit/user-edit.component";
import { CreateTaskComponent } from "./view/pages/task/create-task/create-task.component";
import { FamilyComponent } from "./view/pages/user/family/family.component";
import { RegisterChildComponent } from "./view/pages/user/register-child/register-child.component";
import { CreateGratificationComponent } from "./view/pages/gratification/create-gratification/create-gratification.component";
import { EditGratificationComponent } from "./view/pages/gratification/edit-gratification/edit-gratification.component";
import {SelectChildComponent} from "./view/pages/task/select-child/select-child.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'registerChild',
    component: RegisterChildComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:id/edit',
    component: UserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'family',
    component: FamilyComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'task',
    component: TaskComponent
  },
  {
    path: 'create-task',
    component: CreateTaskComponent
  },
  {
    path: 'task/:id/edit',
    component: EditTaskComponent,
  },
  {
    path: 'task/:id/del',
    component: TaskComponent,
  },
  {
    path: 'gratification',
    component: GratificationComponent
  },
  {
    path: 'createGratification',
    component: CreateGratificationComponent
  },
  {
    path: 'gratification/:id',
    component: EditGratificationComponent
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
    path: 'select-child/:taskId',
    component: SelectChildComponent
  },

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
