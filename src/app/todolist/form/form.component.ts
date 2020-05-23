import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  task: string;
  @Output() addToList: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addTask(form: NgForm) {
    if  (this.task !== undefined && this.task !== null) {
      this.addToList.emit(this.task);
      form.reset();
    }
  }

}
