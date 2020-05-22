import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  tasks: string[] = new Array<string>();

  // load this later in through Database
  needToFinish: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  //later add db adding
  addTask(task: string) {
    if (task === undefined || task === null) {
      return;
    } else {  
      this.tasks.push(task);
      this.needToFinish++;
    }
  }

  finishTask(task: string) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
    this.needToFinish--;
  }

}
