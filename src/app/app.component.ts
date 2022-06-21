import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoArr = [
    "Learn Javascript",
    "Learn Angular",
    "Be awesome"
  ]

  addTodo(todoInput: HTMLInputElement) {
    this.todoArr.push(todoInput.value)
    todoInput.value = ''
  }
}
