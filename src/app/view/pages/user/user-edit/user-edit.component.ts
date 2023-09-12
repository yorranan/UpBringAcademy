import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import UserChild from 'src/app/model/entities/UserChild';
import UserParent from 'src/app/model/entities/UserParent';
import UserChildService from 'src/app/model/service/UserChildService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent {
  user;
  name: string;
  email: string;
  birthDate: Date;

  constructor(private router: Router, private parentService: UserParentService, private childService: UserChildService, private dialog: MatDialog){

  }

  ngOnInit(): void {
    this.user = history.state.user;
    this.user.birthDate = this.user.birthDate;
    this.name = this.user.name;
    this.email = this.user.email;
    this.birthDate = this.user.birthDate;
  }

  delete(){
  }

  edit(){
    if(this.user.admin){
      const parent: UserParent = this.user;
      parent.name = this.name;
      parent.email = this.email;
      parent.birthDate = this.birthDate;
      this.parentService.update(parent.id, parent);
    }else{
      const child: UserChild = this.user;
      child.name = this.name;
      child.email = this.email;
      child.birthDate = this.birthDate;
      this.childService.update(child.id, child);
    }
    this.router.navigate(['user', this.user.id], {state:{admin: this.user.admin}});
  }
}
