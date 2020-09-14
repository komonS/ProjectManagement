import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  username:''
  ngOnInit(): void {
    if(localStorage.userID != null){
      this.username = localStorage.userID
    }
  }

}
