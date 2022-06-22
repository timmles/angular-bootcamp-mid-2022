import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TodoServiceService} from "../todo-service.service";
import {Observable} from "rxjs";
import {Todo} from "../models/todo.model";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todo: Observable<Todo[]> = this.todoService.getTodo()

  constructor(private todoService: TodoServiceService) {
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index)
    // this.todo = this.todoService.getTodo()
  }
}
