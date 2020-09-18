import { Component, OnInit } from '@angular/core';
import axios from 'axios'
@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {

  constructor() { }
  statusData: []
  priorityData: []
  priority: ''
  status: ''
  name: ''
  discript: ''
  start: ''
  end: ''
  success: ''
  comment: ''





  ngOnInit(): void {
    this.getPriority()
    this.getStatus()
  }

  async getPriority() {
    await axios.get('http://localhost:3000/priority').then(res => {
      this.priorityData = res.data
    })
  }

  async getStatus() {
    await axios.get('http://localhost:3000/status').then(res => {
      this.statusData = res.data
    })
  }

  async onSubmit() {
    await axios.post('http://localhost:3000/task', {
      name: this.name,
      descript: this.discript,
      memberID: localStorage.userID,
      status: this.status,
      start: this.start,
      end: this.end,
      success: this.success,
      comment: this.comment,
      priority: this.priority
    }).then(res => {
      if(res.data.status == 'success'){
        alert('add task is complated')
      }else{
        alert(res.data.status + '! '+res.data.detail)
      }
    })
  }

}
