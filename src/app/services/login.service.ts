import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../globals/User';
import { Router } from '@angular/router';
import { TodoService } from './todo.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;
  loadUser: User;
  result: number;

  currentUser: string;

  tasks: string[] = new Array<string>();
  needToFinish: number = 0;

  constructor(private http: HttpClient,
    private router: Router,
    private todoService: TodoService) { }

  login(username: string, password: string) {
    // Gets User from Database
    this.http.get<User>('http://localhost:8080/login/' + username)
    .subscribe(user => {
      this.loadUser = user
     
      // Loggs user in
      if (this.loadUser.password == password) {
        this.loggedIn = true
        this.currentUser = username;

        this.router.navigateByUrl('/');

        this.todoService.loadItems(this.currentUser)
        .subscribe(loadedTasks => {
          this.tasks = loadedTasks;
          this.needToFinish = loadedTasks.length;
        });

      }
    });
  }

  logout() {
    this.loggedIn = false;
  }

  register(username: string, email: string, password: string) {
    console.log(new User(username, email, password));
    this.http.post<number>('http://localhost:8080/register', new User(username, email, password))
    .subscribe(re => {
      this.result = re

      if (this.result === 1) {
        this.login(username, password);
        
        this.router.navigateByUrl('/');
      }
    });
  }
}
