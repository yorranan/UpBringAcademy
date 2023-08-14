import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { SettingsComponent } from './components/auth/settings/settings.component';
import { GratificationComponent } from './components/auth/gratification/gratification.component';
import { TaskComponent } from './components/auth/task/task.component';
import { UserComponent } from './components/auth/user/user.component';
import { SessionComponent } from './components/session/session.component';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    SettingsComponent,
    GratificationComponent,
    TaskComponent,
    UserComponent,
    SessionComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
