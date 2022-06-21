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

  todoAdd(todo: string) {
    this.todoArr.push(todo)
  }
}
