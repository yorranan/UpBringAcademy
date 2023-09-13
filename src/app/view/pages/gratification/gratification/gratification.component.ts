import { Component, OnInit } from '@angular/core';
import Gratification from "../../../../model/entities/Gratification";
import { Router } from '@angular/router';
import AuthService from 'src/app/model/service/AuthService';
import GratificationService from 'src/app/model/service/GratificationService';
import DateReference from 'src/app/model/util/DateReference';
@Component({
  selector: 'app-gratification',
  templateUrl: './gratification.component.html',
  styleUrls: ['./gratification.component.css']
})
export class GratificationComponent implements OnInit{
  public user;
  public gratifications: Gratification[] = [];

  constructor(private router: Router, private auth: AuthService, private gratificationService: GratificationService){
  }

  ngOnInit(): void {
    this.auth.getUserAuth().subscribe(user =>{
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        this.gratificationService.getByParent(this.user.id).subscribe(gratifications =>{
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
}
