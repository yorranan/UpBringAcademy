import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
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
  showAlert = false;

  constructor(private router: Router, private parentService: UserParentService, private childService: UserChildService, private modal: NgbModal){

  }

  ngOnInit(): void {
    this.user = history.state.user;
    this.user.birthDate = this.user.birthDate;
    this.name = this.user.name;
    this.email = this.user.email;
    this.birthDate = this.user.birthDate;
  }

  delete(){
    const message = 'Esse usuario sera EXCLUIDO!';
    const confirmed = this.confirm(message);

    if (confirmed) {
      if(this.user.admin){
        this.parentService.delete(this.user.id, this.user);
      }else{
        this.childService.delete(this.user.id, this.user);
      }
    }
  }

  confirm(message: string): boolean {
    return window.confirm(message);
  }

  edit(){
    if(this.name && this.email && this.birthDate)
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
