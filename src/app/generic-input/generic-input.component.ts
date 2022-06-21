import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.css']
})
export class GenericInputComponent {

  @Output()
  todoAdd: EventEmitter<string> = new EventEmitter<string>()

  addTodo(todoInput: HTMLInputElement) {
    this.todoAdd.emit(todoInput.value)
    todoInput.value = ''
  }

}
