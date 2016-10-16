import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'todo-item',
	templateUrl: 'app/todo/todo-item/todo-item.component.html',
	styleUrls: ['app/todo/todo-item/todo-item.component.css']
})

export class TodoItemComponent {
  @Input() todo;
  @Output() deleted = new EventEmitter();

  constructor(){
  }

  toggleDone(){
  	this.todo.done = !this.todo.done;
  }

  delete(){
  	this.deleted.emit(this.todo);
  }
}