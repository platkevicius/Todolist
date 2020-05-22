import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todolist';

  loggedIn: boolean = false;

  login() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }

}
