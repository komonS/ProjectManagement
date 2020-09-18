import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import axios from 'axios'
@Component({
  selector: 'app-task-all',
  templateUrl: './task-all.component.html',
  styleUrls: ['./task-all.component.css']
})
export class TaskAllComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }
  id:string = ''
  task:[]
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getTask(this.id)
  }

  async getTask(status){
    await axios.get('http://localhost:3000/task',{
      params:{
        memberID:localStorage.userID,
        status:status
      }
    }).then(res => {
      this.task = res.data
    })
  }
}
