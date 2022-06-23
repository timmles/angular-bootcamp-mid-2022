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

  url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.url);
  }

  addTodo(todo: Todo): Observable<Todo> {
    return this.http.post<Todo>(this.url, todo);
  }

  removeTodo(index: number) {
    if (index > -1) {
      this.todoArr.splice(index, 1);
    }
  }
}
