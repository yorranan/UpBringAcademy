import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import AuthService from "../../../../model/service/AuthService";
import TaskService from "../../../../model/service/TaskService";
import Task from "../../../../model/entities/Task";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from '@angular/fire/compat/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import UserChild from "../../../../model/entities/UserChild";


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
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
    private taskService: TaskService,
    private router: Router,
    private auth: AngularFireAuth,
    private authUser: AuthService
  ) {
  }

  ngOnInit() {
    const auth = JSON.parse(localStorage.getItem('user'));
    this.authUser.getUserAuth().subscribe(user => {
      if (user) {
        this.user = {
          id: user.payload.id,
          ...user.payload.data() as any
        }
        if (this.user.admin) {
          this.parentId = this.user.id;
          this.taskService.getTasksByParentId(this.parentId).subscribe(tasks => {
            if (tasks) {
              this.tasks = tasks.map(task => {
                return {
                  id: task.payload.doc.id,
                  ...task.payload.doc.data() as any
                } as Task
              });
            }
            console.log(this.parentId);
            console.log('admin');
          });
        } else {
          this.parentId = this.user.parentId;
          // this.taskService.getTasksByChildId(this.parentId).subscribe(tasks => {
          //   if (tasks) {
          //     this.tasks = tasks.map(task => {
          //       return {
          //         id: task.payload.doc.id,
          //         ...task.payload.doc.data() as any
          //       } as Task
          //     });
          //   }
          // });
          console.log(this.parentId);
          console.log('criança');
        }
      }
    });
  }

  create() {
    this.router.navigate(['create-task']);
  }

  update(task: Task) {
    this.router.navigate(['task', task.id, 'edit'], {state: {task: task}});
  }

  confirm(message: string): boolean {
    return window.confirm(message);
  }

  deleted(task: Task) {
    const message = `A Tarefa ${task.name} sera APAGADA`;
    const confirmed = this.confirm(message);

    if (confirmed) {
      this.taskService.delete(task.id);
    }
  }

  done(task: Task) {

  }
  select(task: Task) {
    this.router.navigate(['select-child', task.id], {state: {task: task}});
  }

}
