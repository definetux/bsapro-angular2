import { Component } from '@angular/core';
import { LoggerService } from './shared/logger.service';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html',
	providers:  [ LoggerService ]
})

export class AppComponent {
  constructor(logger: LoggerService){
    this.logger = logger;
  	this.todos = [];
  }

  onTodoAdded(todo){
  	this.todos.push(todo);
  	this.logger.log(`Todo ${todo.title} added`);
  }
}