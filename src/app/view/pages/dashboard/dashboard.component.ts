import { Component, OnInit } from '@angular/core';
import Gratification from 'src/app/model/entities/Gratification';
import UserChild from 'src/app/model/entities/UserChild';
import AuthService from 'src/app/model/service/AuthService';
import GratificationService from 'src/app/model/service/GratificationService';
import UserChildService from 'src/app/model/service/UserChildService';
import DateTimeConverter from 'src/app/model/util/DateTimeConverter';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public user;
  public parentId: string;
  public gratifications: Gratification[] = []
  public children: UserChild[] = [];

  constructor(private auth: AuthService, private gratificationService:GratificationService, private childService: UserChildService, private converter: DateTimeConverter){}

  ngOnInit(): void {
    this.auth.getUserAuth().subscribe(user =>{
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        if(this.user.admin){
          this.parentId = this.user.id;
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
          this.parentId = this.user.parentId;
        }
        this.gratificationService.getByParent(this.parentId).subscribe(gratifications =>{
          if(gratifications){
            this.gratifications = gratifications.map(gratification => {
              return{
                id: gratification.payload.doc.id,
                ... gratification.payload.doc.data() as any
              } as Gratification
            });
          }
        });
      }
    });
  }

  getChild(childId: string): UserChild{
    return this.children.find(child => child.id === childId);
  }

  convertDateTime(date): string{
    const newDate = new Date(date.seconds * 1000 + date.nanoseconds / 1e6);
    return this.converter.convertDataTime(newDate);
  }
}
