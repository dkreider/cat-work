import { Injectable } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private username: string = "bob";
  private password: string = "123456";
  private name: string = "Bob";
  private signedIn: boolean = false;

  constructor() { }

  login(username: string, password: string): Observable<any> {
    return interval();
  }

  getName(): string {
    return this.name;
  }

  isSignedIn(): boolean {
    return this.signedIn;
  }
}
