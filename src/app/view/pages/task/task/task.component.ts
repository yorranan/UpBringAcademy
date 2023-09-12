import { Component } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from "../../../../model/service/AuthService";
import TaskService from "../../../../model/service/TaskService";
import Task from "../../../../model/entities/Task";
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  public name: string;
  public description: string;
  public points: number;
  public beginDateTime: Date;
  public endDateTime: Date;

  constructor(
    private taskService: TaskService,
    private router: Router
){}
  create(){
    this.router.navigate(['create-task']);
  }
}
