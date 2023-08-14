import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { TasksComponent } from './components/auth/tasks/tasks.component';
import { GratificationsComponent } from './components/auth/gratifications/gratifications.component';
import { UserSettingsComponent } from './components/auth/user-settings/user-settings.component';
import { UsersComponent } from './components/auth/users/users.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    DashboardComponent,
    TasksComponent,
    GratificationsComponent,
    UserSettingsComponent,
    UsersComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
