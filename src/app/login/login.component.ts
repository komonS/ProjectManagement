import { Component, OnInit } from '@angular/core';

import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string = 'test';
  password: string = '';
  setUsername(name) {
    this.username = name
  }
  ngOnInit(): void {
  }
  onLogin() {
    /*
    localStorage.userID = this.username
    this.router.navigate(['']);
    */
    alert(this.username)
  }

}
