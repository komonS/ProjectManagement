import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-dash',
  templateUrl: './project-dash.component.html',
  styleUrls: ['./project-dash.component.css']
})
export class ProjectDashComponent implements OnInit {

  constructor() { }
  incoming: number = 0
  going: number = 0
  delayed: number = 0
  ngOnInit(): void {
  }

}
