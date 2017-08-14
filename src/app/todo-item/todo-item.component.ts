import {Component, Input, Output, EventEmitter} from "@angular/core";

import {Todo} from "../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})

export class TodoItemComponent {
    @Input() todo: Todo;
    @Output() deleteTodo = new EventEmitter();
    toggleTodo() {
        this.todo.completed = !this.todo.completed;
    }
    onDeleteTodo() {
        this.deleteTodo.emit(this.todo);
    }
}