import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedIn: boolean = false;

  constructor() { }

  login(username: string, password: string) {
    // TODO: backend logic for logging in
    
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }

}
