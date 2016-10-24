import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { ColorDirective } from './shared/color.directive';

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		TodoListComponent,
		TodoFormComponent,
		TodoItemComponent
	],
	imports: [ BrowserModule, FormsModule ]
})

export class AppModule {}