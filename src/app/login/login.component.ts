import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Router} from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(private router: Router,
    private loginService: LoginService) {}

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (this.username !== undefined && this.username !== null &&
      this.password !== undefined && this.username !== null) {
        
        console.log(this.password);

      this.loginService.login(this.username, this.password);
      
      form.reset(); 
    }
  }

  register() {
    this.router.navigateByUrl('/register');
  }

}
