import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoFormComponent,
		TodoItemComponent
	],
	imports: [ BrowserModule ]
})

export class AppModule {}