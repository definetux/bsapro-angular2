import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TodosService } from '../../shared/todos.service';

@Component({
	selector: 'todo-details',
	templateUrl: 'app/todo/todo-details/todo-details.component.html',
	providers:  [TodosService]
})

export class TodoDetailsComponent {
  constructor(todosService: TodosService, route: ActivatedRoute){
      this.todosService = todosService;
      this.route = route;

      this.todo = {};
      this.route.params.subscribe(params => {
          this.todosService.getTodo(params["id"])
            .subscribe(todo => {
                this.todo = todo;
            });
      });
      
  }
}