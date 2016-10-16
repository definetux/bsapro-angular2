import { Component } from '@angular/core';

@Component({
	selector: 'todo-list',
	templateUrl: 'app/todo/todo-list/todo-list.component.html',
	styleUrls: ['app/todo/todo-list/todo-list.component.css'],
	inputs: ['todos'],
})

export class TodoListComponent {
  constructor(){
  }

  onTodoDeleted(todo){
	if (todo) {
		let index = this.todos.indexOf(todo);

		if (index > -1) {
			this.todos.splice(index, 1);
		}
	}
  }
}