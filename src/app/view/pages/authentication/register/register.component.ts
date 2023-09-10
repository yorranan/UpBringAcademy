import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserParent from 'src/app/model/entities/UserParent';
import AuthService from 'src/app/model/service/AuthService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name: string;
  public birthDate: Date;
  public email: string;
  public password: string;

  constructor(private router: Router,private userParentService: UserParentService, private authService: AuthService){}

  ngOnInit(): void {
  
  }

  cadastrar() {
    const userParent = new UserParent;
    userParent.name = this.name;
    userParent.birthDate = this.birthDate;
    userParent.email = this.email;
    userParent.password = this.password;
    this.userParentService.create(userParent);
    this.router.navigate(['login']);
  }
}