import { Component } from '@angular/core';
import { LoggerService } from '../../shared/logger.service';
import { TodosService } from '../../shared/todos.service';

@Component({
	selector: 'todo-area',
	templateUrl: 'app/todo/todo-area/todo-area.component.html',
  styleUrls: ['app/todo/todo-area/todo-area.component.css'],
	providers:  [ LoggerService, TodosService ]
})

export class TodoAreaComponent {
  constructor(logger: LoggerService, todosService: TodosService){
    this.logger = logger;
    this.todosService = todosService;
    this.todos = [];
  	this.todosService.getTodos().subscribe(data =>  {
      this.todos = data;
    });
  }

  onTodoAdded(todo){
  	this.todos.push(todo);
  	this.logger.log(`Todo ${todo.title} added`);
  }
  onItemsToggled(isChecked) {
    this.todos.forEach(x => x.done = isChecked);
  }
  onDeletedAll() {
    this.todos.length = 0;
  }
}