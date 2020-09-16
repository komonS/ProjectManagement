import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-dash',
  templateUrl: './task-dash.component.html',
  styleUrls: ['./task-dash.component.css']
})
export class TaskDashComponent implements OnInit {

  constructor() { }
  incoming: number = 0
  going: number = 0
  delayed: number = 0
  ngOnInit(): void {
  }

}
