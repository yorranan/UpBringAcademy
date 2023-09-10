import { Component } from '@angular/core';
import { Router } from '@angular/router';
import User from 'src/app/model/entities/User';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user: User;
  name: string;
  email: string;
  birthDate: Date;

  constructor(private router: Router){}

  ngOnInit(): void {
    this.user = history.state.user;
    this.user.birthDate = this.user.birthDate;
    this.name = this.user.name;
    this.email = this.user.email;
    this.birthDate = this.user.birthDate;
  }
}
