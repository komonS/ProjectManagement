import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.css']
})

export class TaskTableComponent implements OnInit {

  constructor() { }
  task:[]
  
  ngOnInit(): void {
    this.getTask()
  }

  async getTask(){
    await axios.get('http://localhost:3000/task',{
      params:{
       memberID:localStorage.userID,
       status:'progress'
      }
     }).then(res => (this.task = res.data))
  }

}
