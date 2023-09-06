import { Component, OnInit } from '@angular/core';
import UserParent from 'src/app/model/entities/UserParent';
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

  constructor(private userParentService: UserParentService){}

  ngOnInit(): void {
  
  }

  cadastrar() {
    const userParent = new UserParent;
    userParent.name = this.name;
    userParent.age = this.birthDate;
    userParent.email = this.email;
    userParent.password = this.password;
    this.userParentService.create(userParent);
  }
}