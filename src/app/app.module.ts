import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
//component
import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';

//service
import { TaskService } from './services/task.service';


import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
