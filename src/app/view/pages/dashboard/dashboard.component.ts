import { Component, OnInit } from '@angular/core';
import UserRequestDTO from 'src/app/model/dto/User/UserRequestDTO';
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
    const user = new UserRequestDTO();
    user.name = "Lorenzo"
    user.email = "lm.pilati@gmail"
    user.password = "123456"
    user.age = new Date();
    this.userService.create(user);
  }

}
