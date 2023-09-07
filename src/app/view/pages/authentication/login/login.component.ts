import { Component, OnInit } from '@angular/core';
import AuthService from 'src/app/model/service/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(private authService: AuthService){}

  ngOnInit(): void {
      
  }

  login(){
    this.authService.logIn(this.email, this.password);
  }
  
}
