import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = [
    "Learn Javascript",
    "Learn Angular",
    "Be awesome"
  ]

  summary(): string {
    return `Summary: 0 / ${this.todo.length}`
  }
}
