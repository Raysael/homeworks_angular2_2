import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Todo} from "../../shared/todo";

@Component({
  moduleId: module.id,
  selector: 'todo-list',
  templateUrl: 'todo-list.component.html',
  styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleTodo: EventEmitter<Todo> = new EventEmitter();

  onDeleteTodo(todo: Todo) {
    this.deleteTodo.emit(todo);
  }

  onToggleTodo(todo: Todo) {
    this.toggleTodo.emit(todo);
  }
}
