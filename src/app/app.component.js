import {Component} from '@angular/core';

@Component({
	selector: 'todo-app',
	templateUrl: 'app/app.component.html',
	styleUrls: ['app/app.component.css']
})
export class AppComponent {
	constructor() {
		this.title = 'Angular2: Simple TodoList';
		this.todos = [];
	}

	addTodo(input) {
		let title = input.value;
		input.value = '';
		this.todos.push(title);
	}
}