import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent {
  constructor(private router: Router){}

  toRegisterChild(){
    this.router.navigate(['/registerChild']);
  }
}
