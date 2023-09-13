import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserParent from 'src/app/model/entities/UserParent';
import AuthService from 'src/app/model/service/AuthService';
import UserParentService from 'src/app/model/service/UserPerentService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public name: string;
  public birthDate: Date;
  public email: string;
  public password: string;

  constructor(private router: Router,private userParentService: UserParentService, private authService: AuthService){}

  ngOnInit(): void {
  
  }

  cadastrar() {
    const birthDate = new Date(this.birthDate);
    if(this.name && this.birthDate && this.email && this.password){
      if((majority(birthDate))){
        const userParent = new UserParent;
        userParent.name = this.name;
        userParent.birthDate = this.birthDate;
        userParent.email = this.email;
        userParent.password = this.password;
        this.userParentService.create(userParent);
        this.router.navigate(['login']);
      }else{
        window.alert("Você não tem idade suficiente!");
      }
    }else{
      window.alert("Todos os campos são obrigatorios");
    }
  }
}

function majority(birthDate: Date): boolean {
  const thisDate = new Date();
  const thisYear = thisDate.getFullYear();
  const thisMonth = thisDate.getMonth() + 1;
  const thisDay = thisDate.getDate();

  const birthYear = birthDate.getFullYear();
  const birthMonth = birthDate.getMonth() + 1;
  const birthDay = birthDate.getDate();

  let age = thisYear - birthYear;

  if (thisMonth < birthMonth || (thisMonth === birthMonth && thisDay < birthDay)) {
    age--;
  }

  return age >= 18;
}