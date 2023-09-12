import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import AuthService from "../../../../model/service/AuthService";
import TaskService from "../../../../model/service/TaskService";
import Task from "../../../../model/entities/Task";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit{
  public name: string;
  public description: string;
  public points: number;
  public beginDateTime: Date;
  public endDateTime: Date;
  public parentId: string;
  public task: any;
  public tasks: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
  ){  this.auth.user.subscribe(user => {
    if (user) {
      this.parentId = user.uid;
    }
  });
  }
  ngOnInit(): void {
      this.taskService.read(this.parentId).subscribe(data => {
        this.task = data;
        console.log('taks:', this.task);
      });
  }
  create(){
    this.router.navigate(['create-task']);
  }


}
