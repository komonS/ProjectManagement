import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  username:''
  userinfo:any = []

  ngOnInit(): void {
    if(localStorage.userID != null){
      this.getUserInfo()
    }
    //this.getUserInfo()
  }

  async getUserInfo(){
    await axios.get('http://localhost:3000/users',{
      params:{
        memberID:localStorage.userID
      }
    }).then(res => {
      this.userinfo = res.data[0]
    })
  }

  onLogout(){
    this.username = ''
    localStorage.clear()
  }

  get userID(){
    return localStorage.userID
  }

}
