import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { ControlComponent } from './control/control.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TaskDashComponent } from './task-dash/task-dash.component';
import { ProjectDashComponent } from './project-dash/project-dash.component';
import { ProjectTableComponent } from './project-table/project-table.component';
import { TaskTableComponent } from './task-table/task-table.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { TaskAllComponent } from './task-all/task-all.component';
import { ProjectAllComponent } from './project-all/project-all.component';
import { TaskAddComponent } from './task-add/task-add.component';
import { ProjectAddComponent } from './project-add/project-add.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    ControlComponent,
    LoginComponent,
    HomeComponent,
    TaskDashComponent,
    ProjectDashComponent,
    ProjectTableComponent,
    TaskTableComponent,
    TaskAllComponent,
    ProjectAllComponent,
    TaskAddComponent,
    ProjectAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
