import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TodoListComponent} from "./todo-list/todo-list.component";
import { TodoListSummaryComponent } from './todo-list-summary/todo-list-summary.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatChipsModule} from "@angular/material/chips";
import {MaterialModule} from "./material/material.module";
import { GenericInputComponent } from './generic-input/generic-input.component';
import {HttpClientModule} from "@angular/common/http";
import {TodoFancyListComponent} from "./todo-fancy-list/todo-fancy-list.component";
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListSummaryComponent,
    GenericInputComponent,
    TodoFancyListComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
