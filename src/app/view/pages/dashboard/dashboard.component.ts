import { Component, OnInit } from '@angular/core';
import Task from 'src/app/model/entities/Task';
import TaskService from 'src/app/model/service/TaskService';
import UserService from 'src/app/model/service/UserService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tasks: Task[];
  
  constructor(private taskService: TaskService, private userService: UserService){

  }
  
  ngOnInit(): void {
    
  }

}
