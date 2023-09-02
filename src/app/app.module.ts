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
import UserService from 'src/app/model/service/UserService';
import { LoginComponent } from './view/pages/authentication/login/login.component';
import { RegisterComponent } from './view/pages/authentication/register/register.component';
import TaskService from './model/service/TaskService';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

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

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [UserService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
