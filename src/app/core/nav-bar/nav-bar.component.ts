import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedIn: boolean = true;
  userName: string = "Bob";

  constructor() { }

  ngOnInit(): void {
  }

  getHelloMessage(username: string = 'Friend'): string {
    return `Welcome Back, ${username}!`;
  }

}
