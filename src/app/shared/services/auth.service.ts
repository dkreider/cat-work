import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string = "bob";
  private password: string = "123456";
  private name: string = "Bob";
  private signedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): boolean {
    if (username == this.username && password == this.password) {
      this.signedIn = true;
      return true;
    }    
    return false;
  }

  getName(): string {
    return this.name;
  }

  isSignedIn(): boolean {
    return this.signedIn;
  }
}
