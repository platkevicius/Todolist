import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from 'src/app/services/todo.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  task: string;
  @Output() addToList: EventEmitter<string> = new EventEmitter<string>();

  constructor(private todo: TodoService) { }

  ngOnInit(): void {
  }

  addTask(form: NgForm) {
    if  (this.task !== undefined && this.task !== null) {
      // TODO: Backend for adding to database
      
      this.todo.addItem("Daniel", this.task);

      this.addToList.emit(this.task);
      form.reset();
    }
  }

}
