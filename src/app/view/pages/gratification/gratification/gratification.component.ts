import { Component } from '@angular/core';
import Gratification from "../../../../model/entities/Gratification";
@Component({
  selector: 'app-gratification',
  templateUrl: './gratification.component.html',
  styleUrls: ['./gratification.component.css']
})
export class GratificationComponent {
  name: string = "Férias, Eu quero Férias";
  description: string = "Lorem ipsum dolor sit amet,  " +
    "incididunt ut labore et dolore magna aliqua.";
  points: number = 100;
}
