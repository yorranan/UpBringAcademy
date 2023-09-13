import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './view/components/footer/footer.component';
import { NavbarComponent } from './view/components/navbar/navbar.component';
import { SidebarComponent } from './view/components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardComponent } from './view/pages/dashboard/dashboard.component';
import { TaskComponent } from './view/pages/task/task/task.component';
import { UserComponent } from './view/pages/user/user/user.component';
import { GratificationComponent } from './view/pages/gratification/gratification/gratification.component';
import { LoginComponent } from './view/pages/authentication/login/login.component';
import { RegisterComponent } from './view/pages/authentication/register/register.component';
import TaskService from './model/service/TaskService';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthGuard } from './guard/auth.guard';
import { UserEditComponent } from './view/pages/user/user-edit/user-edit.component';
import { CreateTaskComponent } from './view/pages/task/create-task/create-task.component';
import Task from "./model/entities/Task";
import { FamilyComponent } from './view/pages/user/family/family.component';
import { RegisterChildComponent } from './view/pages/user/register-child/register-child.component';
import { CreateGratificationComponent } from './view/pages/gratification/create-gratification/create-gratification.component';
import { EditGratificationComponent } from './view/pages/gratification/edit-gratification/edit-gratification.component';
import { EditTaskComponent } from './view/pages/task/edit-task/edit-task.component';
import { SelectChildComponent } from './view/pages/task/select-child/select-child.component';
import {MatCheckboxModule} from "@angular/material/checkbox";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    TaskComponent,
    UserComponent,
    GratificationComponent,
    LoginComponent,
    RegisterComponent,
    UserEditComponent,
    CreateTaskComponent,
    FamilyComponent,
    RegisterChildComponent,
    CreateGratificationComponent,
    EditGratificationComponent,
    EditTaskComponent,
    SelectChildComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AppRoutingModule,
    MatCheckboxModule,
  ],
  providers: [TaskService, AuthGuard, Task ],
  bootstrap: [AppComponent]
})
export class AppModule { }
