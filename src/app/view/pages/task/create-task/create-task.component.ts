import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import UserParentService from "../../../../model/service/UserPerentService";
import AuthService from "../../../../model/service/AuthService";
import TaskService from "../../../../model/service/TaskService";
import Task from "src/app/model/entities/Task";
import {AngularFireAuth} from "@angular/fire/compat/auth";


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})

export class CreateTaskComponent implements OnInit {
  public name: string;
  public description: string;
  public points: number;
  public begindDateTime: Date;
  public endDateTime: Date;
  public parentId: string;

  constructor(
    private router: Router,
    private userParentService: UserParentService,
    private authService: AuthService,
    private task: Task,
    private taskService: TaskService,
    private auth: AngularFireAuth,
  ) {
    this.auth.user.subscribe(user => {
    if (user) {
      this.parentId = user.uid;
    }
  });
  }
    ngOnInit(): void {
    }
  createTask() {
    const task = new Task;
    task.name = this.name;
    task.description = this.description;
    task.points = this.points;
    task.beginDateTime = this.begindDateTime = new Date(Date.now());
    task.endDateTime = this.endDateTime;
    task.parentId = this.parentId;

    // console.log('name:', this.name);
    // console.log('description:', this.description);
    // console.log('points:', this.points);
    // console.log('begindDateTime:', this.begindDateTime);
    // console.log('endDateTime:', this.endDateTime);
    // console.log('parentId:', this.parentId);
    this.taskService.create(task);
    this.router.navigate(['task']);
  }
}
