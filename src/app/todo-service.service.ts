import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoArr = [
    "Learn Javascript",
    "Learn Angular",
    "Be awesome"
  ]

  getTodo() {
    return this.todoArr
  }

  addTodo(todo: string) {
    this.todoArr.push(todo)
  }

  removeTodo(index: number) {
    if (index > -1) {
      this.todoArr.splice(index, 1);
    }
  }
}
