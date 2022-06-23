import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoServiceService} from "../todo-service.service";
import {Observable, switchMap} from "rxjs";
import {Todo} from "../models/todo.model";

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {

  public todo: Observable<Todo> = new Observable<Todo>();

  constructor(private activatedRoute: ActivatedRoute, private todoService: TodoServiceService) {}

  ngOnInit(): void {
    this.todo = this.activatedRoute.paramMap.pipe(
      switchMap((paramMap) => {
        let id: number = Number(paramMap.get('id'));
        return this.todoService.getSingleTodo(id)
      })
    )
  }

}
