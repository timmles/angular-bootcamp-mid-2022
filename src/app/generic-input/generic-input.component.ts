import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TodoServiceService} from "../todo-service.service";

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent {

  constructor(private todoService: TodoServiceService) {
  }
  addTodo(todoInput: HTMLInputElement) {
    this.todoService.addTodo({ title: todoInput.value, id: 0, userId: 0, completed: false})
    todoInput.value = ''
  }

}
