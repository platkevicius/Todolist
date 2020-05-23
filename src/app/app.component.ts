import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todolist';

  constructor(private loginService: LoginService) {}

  login() {
    this.loginService.login();
  }

  logOut() {
    this.loginService.logout();
  }

}
