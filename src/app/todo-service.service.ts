import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Todo} from "./models/todo.model";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todoArr = [
    "Learn Javascript",
    "Learn Angular",
    "Be awesome"
  ]

  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
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
