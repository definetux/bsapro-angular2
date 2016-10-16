import { Component } from '@angular/core';

@Component({
	selector: 'my-app',
	templateUrl: 'app/app.component.html'
})

export class AppComponent {
  constructor(){
  	this.todos = [];
  }

  onTodoAdded(todo){
  	this.todos.push(todo);
  }
}