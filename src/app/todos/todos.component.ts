import {Component, OnInit} from "@angular/core";

import {Todo} from "../shared/todo";
import {TodoService} from "../shared/todo.service";

@Component({
  moduleId: module.id,
  selector: 'todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css']
})

export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private _todoService: TodoService) {
    this.todos = [];
  }

  ngOnInit() {
    this._todoService.getTodos()
      .subscribe(todos => this.todos = todos);
  }
  createTodo(title: string) {
    this._todoService.createTodo(title)
      .subscribe(todo => this.todos.push(todo));
  }

  deleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo)
      .subscribe(res => {
      let index = this.todos.indexOf(todo);
      if (index >= 0) {
        this.todos.splice(index, 1);
      }
    });
  }

  toggleTodo(todo: Todo) {
    this._todoService.toggleTodo(todo)
      .subscribe(res => {
      todo.completed = !todo.completed;
    });
  }
}
