import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-task-dash',
  templateUrl: './task-dash.component.html',
  styleUrls: ['./task-dash.component.css']
})
export class TaskDashComponent implements OnInit {

  constructor() { }
  incoming: string = '0'
  going: string = '0'
  delayed: string = '0'
  task:[]
  ngOnInit(): void {
    this.getCountTask()
  }
  
  async getCountTask(){
    await axios.get('http://localhost:3000/task/count',{
     params:{
      memberID:localStorage.userID,
      status:'incoming'
     }
    }).then(res => (this.incoming = res.data[0].counts))

    await axios.get('http://localhost:3000/task/count',{
     params:{
      memberID:localStorage.userID,
      status:'going'
     }
    }).then(res => (this.going = res.data[0].counts))

    await axios.get('http://localhost:3000/task/count',{
     params:{
      memberID:localStorage.userID,
      status:'delayed'
     }
    }).then(res => (this.delayed = res.data[0].counts))

  }

}
