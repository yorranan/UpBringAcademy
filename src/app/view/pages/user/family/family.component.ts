import { Component } from '@angular/core';
import { Router } from '@angular/router';
import UserChild from 'src/app/model/entities/UserChild';
import AuthService from 'src/app/model/service/AuthService';
import UserChildService from 'src/app/model/service/UserChildService';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  user;
  children: UserChild[] = [];
  constructor(private router: Router, private auth: AuthService, private childService: UserChildService){
    this.setUser()
  }

  setUser(){
    return this.auth.getUserAuth().subscribe(user =>{
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        this.user.childrenId.forEach((childId) =>{
          this.childService.read(childId).subscribe(child =>{
            if(child){
              const childFire = {
                id: child.payload.id,
                ... child.payload.data() as any
              } as UserChild
              this.children.push(childFire);
            }
          })
        })
      }
    })
  }
  
toChild(childId: string){
  this.router.navigate(["/user", childId]);
}

  toRegisterChild(){
    this.router.navigate(['/registerChild']);
  }
}
