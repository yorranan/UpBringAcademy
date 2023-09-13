import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Gratification from 'src/app/model/entities/Gratification';
import GratificationService from 'src/app/model/service/GratificationService';

@Component({
  selector: 'app-create-gratification',
  templateUrl: './create-gratification.component.html',
  styleUrls: ['./create-gratification.component.css']
})
export class CreateGratificationComponent implements OnInit {
  parentId: string;
  public name: string;
  public description: string;
  public quantity: number;
  public points: number;

  constructor(private router: Router, private gratificationService: GratificationService){

  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user'))
    this.parentId = user.uid;
  }

  create(){
    if(!this.quantity){
      this.quantity = null;
    }
    if(this.name && this.description && this.points){
      const gratification: Gratification = new Gratification();
      gratification.name = this.name;
      gratification.description = this.description;
      gratification.quantity = this.quantity;
      gratification.points = this.points;
      gratification.parentId = this.parentId;
      this.gratificationService.create(gratification);
      this.router.navigate(['gratification']);
    }else{
      window.alert("É necessario nome, descrição e pontos");
    }
  }
}
