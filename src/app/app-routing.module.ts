import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoListComponent} from "./todo-list/todo-list.component";
import {TodoFancyListComponent} from "./todo-fancy-list/todo-fancy-list.component";
import {OneComponent} from "./one/one.component";
import {TwoComponent} from "./two/two.component";

const routes: Routes = [
  { path: 'todo', component: TodoListComponent, children: [
      {path: ':id', component: OneComponent}
  ]},
  { path: 'fancy', component: TodoFancyListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
