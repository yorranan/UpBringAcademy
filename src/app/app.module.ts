import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { SettingsComponent } from './components/auth/settings/settings.component';
import { GratificationComponent } from './components/gratification/gratification.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { SessionComponent } from './components/session/session.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    SignInComponent,
    SignUpComponent,
    AuthComponent,
    DashboardComponent,
    SettingsComponent,
    GratificationComponent,
    TaskComponent,
    UserComponent,
    SessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
