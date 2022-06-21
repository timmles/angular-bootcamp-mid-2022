import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoListComponent} from "./todo-list/todo-list.component";
import { TodoListSummaryComponent } from './todo-list-summary/todo-list-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
