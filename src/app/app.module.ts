import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthComponent } from './components/auth/auth.component';
import { SettingsComponent } from './components/auth/settings/settings.component';
import { GratificationComponent } from './components/auth/gratification/gratification.component';
import { TaskComponent } from './components/auth/task/task.component';
import { UserComponent } from './components/auth/user/user.component';
import { SessionComponent } from './components/session/session.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

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
    FooterComponent,
    NavbarComponent,
    SidebarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
