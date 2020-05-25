import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor(public loginService: LoginService,
    private todoService: TodoService) { }

  ngOnInit(): void {
    
  }

  //later add db adding
  addTask(task: string) {
      this.loginService.tasks.push(task);
      this.loginService.needToFinish++;
  }

  finishTask(task: string) {
    this.loginService.tasks.splice(this.loginService.tasks.indexOf(task), 1);
    this.loginService.needToFinish--;
  }

}
