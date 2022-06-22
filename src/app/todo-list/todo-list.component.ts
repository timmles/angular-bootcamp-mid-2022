import {Component, EventEmitter, Input, Output} from "@angular/core";
import {TodoServiceService} from "../todo-service.service";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todo:string[] = this.todoService.getTodo()

  constructor(private todoService: TodoServiceService) {
  }

  removeTodo(index: number) {
    this.todoService.removeTodo(index)
    // this.todo = this.todoService.getTodo()
  }
}
