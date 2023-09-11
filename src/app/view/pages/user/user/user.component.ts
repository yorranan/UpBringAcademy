import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/model/entities/User';
import AuthService from 'src/app/model/service/AuthService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user
  auth: User;
  name: string;
  email: string;
  birthDate: Date;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(): void {
    this.authService.getUserAuth().subscribe(res => {
      this.auth = {
        id: res.payload.id,
        ... res.payload.data() as any
      }
    });
    this.user = history.state.user;
    this.user.birthDate = this.user.birthDate;
    this.name = this.user.name;
    this.email = this.user.email;
    this.birthDate = this.user.birthDate;
  }
}
