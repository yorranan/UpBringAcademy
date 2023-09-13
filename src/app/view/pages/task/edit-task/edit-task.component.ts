import { Component } from '@angular/core';
import Task from "../../../../model/entities/Task";
import {ActivatedRoute, Router} from "@angular/router";
import TaskService from "../../../../model/service/TaskService";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import AuthService from "../../../../model/service/AuthService";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  public name: string;
  public description: string;
  public points: number;
  public beginDateTime: Date;
  public endDateTime: Date;
  public parentId: string;
  public task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private authUser: AuthService,

  ) {}

  ngOnInit() {
    this.task = history.state.task;
    this.name = this.task.name;
    this.description = this.task.description;
    this.points = this.task.points;
    this.beginDateTime = this.task.beginDateTime;
    this.endDateTime = this.task.endDateTime;
  }
  updateTask(){
    this.task.name = this.name;
    this.task.description = this.description;
    this.task.points = this.points;
    this.task.beginDateTime = this.beginDateTime;
    this.task.endDateTime = this.endDateTime;
    this.taskService.update(this.task.id, this.task);
    this.router.navigate(['task']);
  }

  cancel(){
    this.router.navigate(['task']);
  }
}
