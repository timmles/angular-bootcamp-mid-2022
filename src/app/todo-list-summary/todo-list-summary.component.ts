import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list-summary',
  templateUrl: './todo-list-summary.component.html',
  styleUrls: ['./todo-list-summary.component.css']
})
export class TodoListSummaryComponent {

  @Input()
  todo: string[] = []

  summary(): string {
    return `Summary: 0 / ${this.todo.length}`
  }
}
