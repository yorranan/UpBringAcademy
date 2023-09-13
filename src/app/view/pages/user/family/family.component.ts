import { Component } from '@angular/core';
import { Router } from '@angular/router';
import UserChild from 'src/app/model/entities/UserChild';
import UserParent from 'src/app/model/entities/UserParent';
import AuthService from 'src/app/model/service/AuthService';
import UserChildService from 'src/app/model/service/UserChildService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  user;
  parent: UserParent;
  children: UserChild[] = [];
  constructor(private router: Router, private auth: AuthService, private childService: UserChildService, private parentService: UserParentService){
    this.auth.getUserAuth().subscribe(user =>{
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        if(this.user.admin){
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
        }else{
          this.parentService.read(this.user.parentId).subscribe(parent =>{
            if(parent){
              this.parent = {
                id: parent.payload.id,
                ... parent.payload.data() as any
              }as UserParent
              this.parent.childrenId.forEach((childId =>{
                if(childId !== this.user.id){
                  this.childService.read(childId).subscribe(child =>{
                    if(child){
                      const childFire ={
                        id: child.payload.id,
                        ... child.payload.data() as any
                      } as UserChild
                      this.children.push(childFire);
                    }
                  })
                }
              }))
            }
          })
        }
      }
    })
  }

  
  
toUser(userId: string){
  this.router.navigate(["/user", userId]);
}

  toRegisterChild(){
    this.router.navigate(['/registerChild']);
  }
}
