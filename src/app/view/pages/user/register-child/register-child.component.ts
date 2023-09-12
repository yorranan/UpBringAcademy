import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import UserChild from 'src/app/model/entities/UserChild';
import UserParent from 'src/app/model/entities/UserParent';
import UserChildService from 'src/app/model/service/UserChildService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-register-child',
  templateUrl: './register-child.component.html',
  styleUrls: ['./register-child.component.css']
})
export class RegisterChildComponent implements OnInit {
  parent: UserParent;
  name: string;
  birthDate: Date;
  email: string;
  password: string;

  constructor(private auth: AngularFireAuth,private parentService: UserParentService, private childService: UserChildService, private router: Router){}

  ngOnInit(): void {
    const auth = JSON.parse(localStorage.getItem('user'));
    this.parentService.read(auth.uid).subscribe(parent =>{
      this.parent = {
        id: parent.payload.id,
        ... parent.payload.data() as any
      } as UserParent;
    })
  }

  register(){
    const child: UserChild =  new UserChild();
    child.name = this.name;
    child.birthDate = this.birthDate;
    child.email =this.email;
    child.password = this.password;
    child.parentId = this.parent.id;
    console.log(this.parent.childrenId);
    this.childService.create(child, this.parent);
    this.router.navigate(['family']);
  }
}
