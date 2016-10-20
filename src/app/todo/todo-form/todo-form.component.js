import { Component, Output, EventEmitter } from '@angular/core';
import { Todo } from 'app/todo/todo.model';

@Component({
	selector: 'todo-form',
	templateUrl: 'app/todo/todo-form/todo-form.component.html',
	styleUrls: ['app/todo/todo-form/todo-form.component.css']
})

export class TodoFormComponent {
	@Output() added = new EventEmitter();
	
	constructor(){
	}

	addTodo(title){
		this.added.emit(new Todo(title));
	}
}