import { Component } from '@angular/core';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  name: string = "Tarefa 1"
  description: string = "Lorem ipsum dolor sit amet";
  points: number = 100;
  beginDateTime: Date = new Date()
  endDateTime: Date = new Date();
}
