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
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router,
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private authUser: AuthService
  ) {
    this.auth.user.subscribe(user => {
      if (user) {
        this.parentId = user.uid;
      }
    });
  }

  async ngOnInit(): Promise<void> {
    const auth = JSON.parse(localStorage.getItem('user'));
    try {
      const data = await this.taskService.getTasksByParentId(auth.uid);
      if (data) {
        data.forEach((taskData: any) => {
          const taskFire = {
            id: taskData.payload.id,
            ...taskData.payload.data() as any
          } as Task;
          this.tasks.push(taskFire);
          console.log('data:', taskFire);
          console.log('nome:', taskFire.name);
          console.log('auth:', auth);
        });
      }
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  }

  create() {
    this.router.navigate(['create-task']);
  }
}
