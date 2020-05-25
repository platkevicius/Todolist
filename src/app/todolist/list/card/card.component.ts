import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() task: string;
  @Output() finishTask: EventEmitter<string> = new EventEmitter<string>();

  constructor(private todo: TodoService,
    private login: LoginService) { }

  ngOnInit(): void {
  }

  finish() {
    // TODO: delete data form database
    this.todo.removeItem(this.login.currentUser, this.task);
    this.finishTask.emit(this.task);
  }

}
