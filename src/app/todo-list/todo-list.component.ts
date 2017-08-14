import {Component, Input} from "@angular/core";

import {Todo} from "../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent {
    @Input() todos: Todo[];

    toggleTodo(todo: Todo) {
        todo.completed = !todo.completed
    }

    deleteTodo(todo: Todo) {
        let index = this.todos.indexOf(todo);
        if (index >= 0) {
            this.todos.splice(index, 1)
        }
    }
}