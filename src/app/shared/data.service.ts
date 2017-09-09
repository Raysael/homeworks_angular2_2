import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        title: 'Learn JavaScript',
        completed: false
      },
      {
        id: 2,
        title: 'Learn Angular 2',
        completed: true
      },
      {
        id: 3,
        title: 'Write an application',
        completed: false
      }
    ];

    return {todos};
  }
}
