import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {HomeComponent} from './home/home.component'
import {TaskAllComponent} from './task-all/task-all.component'
import {ProjectAllComponent} from './project-all/project-all.component'
import {TaskAddComponent} from './task-add/task-add.component'
import {ProjectAddComponent} from './project-add/project-add.component'
import {TaskViewComponent} from './task-view/task-view.component'
const routes: Routes = [
  {
    path: 'login',component:LoginComponent
  },
  {
    path: 'task/view/:id',component:TaskViewComponent
  },
  {
    path: 'new/task',component:TaskAddComponent
  },
  {
    path:'task/:id',component:TaskAllComponent
  },
  {
    path:'project/:id',component:ProjectAllComponent
  },
  {
    path:'new/project',component:ProjectAddComponent
  },
  {
    path: '',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
