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
          if(this.user.admin){
            this.user.childrenId.forEach((childId) =>{
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
          }else{
            this.parentService.read(this.user.parentId).subscribe(parent =>{
              if(parent){
                this.parent = {
                  id: parent.payload.id,
                  ... parent.payload.data() as any
                }as UserParent
                this.parent.childrenId.forEach((childId =>{
                  if(childId !== this.user.id){
                    this.childService.read(childId).subscribe(child =>{
                      if(child){
                        const childFire ={
                          id: child.payload.id,
                          ... child.payload.data() as any
                        } as UserChild
                        this.children.push(childFire);
                      }
                    })
                  }
                }))
              }
            })
          }
        }
      })
  }

  ngOnInit() {
    this.task = history.state.task;
    this.name = this.task.name;
    this.description = this.task.description;
    this.points = this.task.points;
    this.beginDateTime = this.task.beginDateTime;
    this.endDateTime = this.task.endDateTime
  }

  childSelection: { [childId: string]: boolean } = {};

  selectChild() {
    this.selectedChildIds = Object.keys(this.childSelection)
        .filter(childId => this.childSelection[childId])
        .map(String); // Converter para string
    console.log('IDs das crianças selecionadas:', this.selectedChildIds);
  }

    sendSelectedChild(selectedChildIds:number[]){
      // this.task.name = this.name;
      // this.task.description = this.description;
      // this.task.points = this.points;
      // this.task.beginDateTime = this.beginDateTime;
      // this.task.endDateTime = this.endDateTime;
      // const task = new Task;
      // const dateReference = new DateReference();
      // dateReference.childId = selectedChildIds;
      //
      // task.conclusionDateTime = [dateReference];

    //   this.taskService.update(this.task.id, this.task);
    //   this.router.navigate(['task']);
    //  console.log('IDs das crianças selecionadas:', selectedChildIds);
    }

  }
