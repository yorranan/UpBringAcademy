import { Component, OnInit } from '@angular/core';
import Gratification from "../../../../model/entities/Gratification";
import { Router } from '@angular/router';
import AuthService from 'src/app/model/service/AuthService';
import GratificationService from 'src/app/model/service/GratificationService';
import DateReference from 'src/app/model/util/DateReference';
import UserChildService from 'src/app/model/service/UserChildService';
@Component({
  selector: 'app-gratification',
  templateUrl: './gratification.component.html',
  styleUrls: ['./gratification.component.css']
})
export class GratificationComponent implements OnInit{
  public parentId: string;
  public user;
  public gratifications: Gratification[] = [];

  constructor(private router: Router, private auth: AuthService, private gratificationService: GratificationService, private childService: UserChildService){
  }

  ngOnInit(): void {
    this.auth.getUserAuth().subscribe(user =>{
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        if(this.user.admin){
          this.parentId = this.user.id;
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

  toCreateGratification(){
    this.router.navigate(['createGratification']);
  }
  
  toEditGratification(gratification: Gratification){
    this.router.navigate(['gratification', gratification.id], {state:{gratification: gratification}});
  }

  confirm(message: string): boolean {
    return window.confirm(message);
  }

  delete(gratification: Gratification){
    const message = `A bonificação ${gratification.name} sera APAGADA`;
    const confirmed = this.confirm(message);

    if (confirmed) {
      this.gratificationService.delete(gratification.id);
    }
  }

  redeem(gratification: Gratification){
    if(this.user.points < gratification.points){
      window.alert("Pontos insuficientes")
    }else{
      this.user.points -= gratification.points;
      if(gratification.quantity <= 0){
        window.alert("Essa bonificação está esgotada");
      }else{
        if(gratification.quantity !== null){
          gratification.quantity--;
        }
        const dateReference: DateReference = new DateReference()
        dateReference.childId = this.user.id;
        dateReference.dateTime = new Date;
        gratification.redeemDateTime.push(dateReference);
        this.gratificationService.update(gratification.id, gratification);
        this.childService.update(this.user.id, this.user);
      }
    }
  }
}
