import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios'
@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router 
  ) { }
  task_id:string =''
  task:[]
  subject:''
  descript:''
  division:''
  requester:''
  date_from:''
  date_end:''
  date_success:''
  priorityID:''
  statusID:''
  comment:''
  statusData:[]
  priorityData:[]
  ordername:''
  status:''
  priority:''


  ngOnInit(): void {
    this.task_id = this.route.snapshot.paramMap.get('id');
    this.getTaskOne(this.task_id)
    this.getStatus()
    this.getPriority()
  }
  async getStatus() {
    await axios.get('http://localhost:3000/status').then(res => {
      this.statusData = res.data
    })
  }
  async getPriority() {
    await axios.get('http://localhost:3000/priority').then(res => {
      this.priorityData = res.data
    })
  }
  async getTaskOne(id){
    await axios.get('http://localhost:3000/task/view',{
      params:{
        id:id
      }
    }).then(res => {
      this.task = res.data
      this.subject = res.data[0].subProjectName
      this.descript = res.data[0].subProjectDescript
      this.date_from = res.data[0].subProjectStart. 
      this.date_end = res.data[0].subProjectEnd
      this.date_success = res.data[0].subProjectSuccess
      this.priorityID = res.data[0].priorityID
      this.priority = res.data[0].priorityID
      this.statusID = res.data[0].project_status_ID
      this.status = res.data[0].project_status_ID
      this.comment = res.data[0].subProjectComment
      this.ordername = res.data[0].subProjectDetailName
    })
    console.log(this.task)
  }

}
