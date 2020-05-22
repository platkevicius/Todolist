import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (this.username !== undefined && this.username !== null &&
      this.password !== undefined && this.username !== null) {
      // TODO: Login logic
      
      form.reset(); 
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
