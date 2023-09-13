import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Gratification from 'src/app/model/entities/Gratification';
import GratificationService from 'src/app/model/service/GratificationService';

@Component({
  selector: 'app-edit-gratification',
  templateUrl: './edit-gratification.component.html',
  styleUrls: ['./edit-gratification.component.css']
})
export class EditGratificationComponent implements OnInit {
  
  public gratification: Gratification
  public name: string;
  public description: string;
  public quantity: number;
  public points: number;


  constructor(private gratificationService: GratificationService, private router: Router){
    
  }

  ngOnInit(): void {
    this.gratification = history.state.gratification;
    this.name = this.gratification.name;
    this.description = this.gratification.description;
    this.quantity = this.gratification.quantity;
    this.points = this.gratification.points;
  }

  edit(){
    if(!this.quantity){
      this.quantity = null;
    }
    if(this.name && this.description && this.points){
      this.gratification.name = this.name;
      this.gratification.description = this.description;
      this.gratification.quantity = this.quantity;
      this.gratification.points = this.points;
      this.gratificationService.update(this.gratification.id, this.gratification);
      this.router.navigate(['gratification']);
    }else{
      window.alert("É necessario nome, descrição e pontos");
    }
  }
  
  cancel(){
    this.router.navigate(['gratification']);
  }
}
