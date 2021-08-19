import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string = "bob";
  private password: string = "123456";
  private name: string = "Bob"

  constructor() { }

  login(username: string, password: string): boolean {
    if (username == this.username && password == this.password) {
      return true;
    }    
    return false;
  }

  getName(): string {
    return this.name;
  }
}
