import { Component, OnInit } from '@angular/core';
import axios from 'axios'
import { Router, Routes, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  username: string = '';
  password: string = '';
  setUsername(name) {
    this.username = name
  }
  ngOnInit(): void {
  }
  async onLogin() {
    let result;
    await axios.get('http://localhost:3000/login',{
      params:{
        username:this.username,
        password:this.password
      }
    }).then(res =>{
      result = res.data[0]
      console.log(result)
      if(result == undefined){
        alert("username or password incorrect")
      }else{
        localStorage.userID = result.memberID
        this.router.navigate([''])
      }
    })
    
    //this.router.navigate(['']);
    
  }

}
