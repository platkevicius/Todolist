import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../globals/User';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;
  loadUser: User;
  result: number;

  constructor(private http: HttpClient,
    private router: Router) { }

  login(username: string, password: string) {
    // Gets User from Database
    this.http.get<User>('http://localhost:8080/login/daniel')
    .subscribe(user => {
      this.loadUser = user
     
      // Loggs user in
      if (this.loadUser.password == password) {
        this.loggedIn = true
        
        this.router.navigateByUrl('/');
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
