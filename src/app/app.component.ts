import {Component} from "@angular/core";

import {Todo} from "./shared/todo";
import {todos} from  "./shared/data";

@Component({
    selector: 'app-root',
    moduleId: module.id,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    logo = 'assets/img/angular.svg';
    todos: Todo[] = todos;

    createToDo(title:string) {
        const todo = new Todo(title);
        this.todos.push(todo);
    }
}
