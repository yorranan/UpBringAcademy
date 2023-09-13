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
  public task: any;
  tasks: Task[] = [];
  user: any;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private authUser: AuthService,

  ) {}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   const taskId = params['id'];
    //  this.taskService.read(taskId).subscribe(tasks => {
    //   if(tasks){
    //     this.tasks = tasks.map(task => {
    //       return {
    //         id: task.payload.doc.id,
    //         ...task.payload.doc.data() as any
    //       } as Task
    //     });
    //   }
    //  });
    // });
  }
  updateTask(){

  }
}
