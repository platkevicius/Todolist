import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() login: EventEmitter<any> = new EventEmitter<any>();

  username: string;
  password: string;
  password_check: string;
  email: string;

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  register(form: NgForm) {
    if (this.username !== undefined && this.username !== null &&
      this.password !== undefined && this.password !== null &&
      this.password_check !== undefined && this.password_check !== null &&
      this.email !== undefined && this.email !== null) {

      // TODO: CHECK IF EMAIL ALREADY EXISTS

      if (this.password_check === this.password) {
        this.loginService.register(this.username, this.email, this.password); 
      }
    }
  }

}
