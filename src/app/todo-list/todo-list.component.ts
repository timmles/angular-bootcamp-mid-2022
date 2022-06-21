import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todo:string[] = []
  @Output()
  todoChange: EventEmitter<string[]> = new EventEmitter<string[]>()

  removeTodo(index: number) {
    let newArr = this.todo.filter((value, idx) => {return index !== idx})

    this.todoChange.emit(newArr)
  }
}
