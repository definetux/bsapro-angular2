import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { TodoAreaComponent} from './todo/todo-area/todo-area.component';
import { TodoDetailsComponent} from './todo/todo-details/todo-details.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoFormComponent } from './todo/todo-form/todo-form.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { ColorDirective } from './shared/color.directive';

const appRoutes: Routes = [
  { path: 'todo/:id', component: TodoDetailsComponent },
  { path: '', component: TodoAreaComponent },
];

@NgModule({
	bootstrap: [AppComponent],
	declarations: [
		AppComponent,
		TodoAreaComponent,
		TodoDetailsComponent,
		TodoListComponent,
		TodoFormComponent,
		TodoItemComponent
	],
	imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)]
})

export class AppModule {}