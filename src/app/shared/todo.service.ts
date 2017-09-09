import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";

import {Todo} from "./todo";

@Injectable()
export class TodoService {
  private apiUrl = 'api/todos';

  constructor(private _http: Http) {
  }

  getTodos(): Observable<Todo[]> {
    return this._http.get(this.apiUrl)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  createTodo(title: string) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let todo = new Todo(title);

    return this._http.post(this.apiUrl, todo, options)
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  deleteTodo(todo: Todo) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${todo.id}`;

    return this._http.delete(url, options)
      .catch(this.handleError);
  }

  toggleTodo(todo: Todo) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers});
    let url = `${this.apiUrl}/${todo.id}`;

    return this._http.put(url, todo, options)
      .catch(this.handleError);
  }

  private handleError(error) {
    console.log('Произошла ошибка:', error);
    return Observable.throw(error.massage || error);
  }
}
