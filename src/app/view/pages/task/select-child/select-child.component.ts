import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Task from "../../../../model/entities/Task";
import TaskService from "../../../../model/service/TaskService";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import AuthService from "../../../../model/service/AuthService";
import UserChild from "../../../../model/entities/UserChild";
import UserParent from "../../../../model/entities/UserParent";
import UserChildService from "../../../../model/service/UserChildService";
import UserParentService from "../../../../model/service/UserPerentService";
import DateReference from "../../../../model/util/DateReference";

@Component({
  selector: 'app-select-child',
  templateUrl: './select-child.component.html',
  styleUrls: ['./select-child.component.css']
})
export class SelectChildComponent {

  selectedChildIds: string[] = [];
  user;
  parent: UserParent;
  children: UserChild[] = [];
  public name: string;
  public description: string;
  public points: number;
  public beginDateTime: Date;
  public endDateTime: Date;
  public parentId: string;
  public task: Task;
  public childSelection: { [childId: string]: boolean } = {};
  constructor(
      private route: ActivatedRoute,
      private taskService: TaskService,
      private router: Router,
      private auth: AngularFireAuth,
      private afs: AngularFirestore,
      private authUser: AuthService,
      private childService: UserChildService,
      private parentService: UserParentService,
  ) {
    this.authUser.getUserAuth().subscribe(user => {
      if(user){
        this.user = {
          id: user.payload.id,
          ... user.payload.data() as any
        }
        this.user.childrenId.forEach((childId) =>{
          this.childSelection[childId] = false;
          this.childService.read(childId).subscribe(child =>{
            if(child){
              const childFire = {
                id: child.payload.id,
                ... child.payload.data() as any
              } as UserChild
              this.children.push(childFire);
            }
          })
        })
        this.task.conclusionDateTime.forEach(conclusion =>{
          this.childSelection[conclusion.childId] = true;
        })
      }
    })
  }

  ngOnInit() {
    this.task = history.state.task;
    this.name = this.task.name;
    this.description = this.task.description;
    this.points = this.task.points;
    this.beginDateTime = this.task.beginDateTime;
    this.endDateTime = this.task.endDateTime;
  }

  choseChild(childId: string){
    if(this.childSelection[childId]){
      this.childSelection[childId] = false;
    }else{
      this.childSelection[childId] = true;
    }
  }

  selectChild() {
    const conclusionDateTime: DateReference[] = [];
    this.user.childrenId.forEach(childId =>{
      if(this.childSelection[childId]){
        conclusionDateTime.push({childId: childId, dateTime: null} as DateReference);
      }
    })
    if(conclusionDateTime.length < 1){
      window.alert("É nescessario escoleher uma criança");
    }else{
      this.task.conclusionDateTime = conclusionDateTime;
      this.taskService.update(this.task.id, this.task);
      this.router.navigate(['task']);
    }
  }


  }
