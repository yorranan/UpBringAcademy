import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import User from 'src/app/model/entities/User';
import AuthService from 'src/app/model/service/AuthService';
import UserChildService from 'src/app/model/service/UserChildService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string;
  admin: boolean;
  same: boolean;
  user;
  auth: User;

  constructor(private router: Router,private activateRoute: ActivatedRoute, private authService: AuthService, private parentService: UserParentService, private childService: UserChildService){
    this.admin = history.state.admin;
    this.activateRoute.params.subscribe(params =>{
      this.id = params['id'];
    })
    this.authService.getUserAuth().subscribe(res => {
      this.auth = {
        id: res.payload.id,
        ... res.payload.data() as any
      }
    })
    if(this.admin){
      this.parentService.read(this.id).subscribe(res =>{
        this.user ={
          id: res.payload.id,
          ... res.payload.data() as any
        }
      });
    }else{
      this.childService.read(this.id).subscribe(res =>{
        this.user ={
          id: res.payload.id,
          ... res.payload.data() as any
        }
      });
    }
  }

  ngOnInit(): void {

  }

  toEdit(){
    this.router.navigate(['user', this.id,'edit'], {state:{user: this.user}});
  }
}
