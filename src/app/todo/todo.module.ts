import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './services/todo.service';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { SingleTodoPageComponent } from './components/single-todo-page/single-todo-page.component';
import { SingleTodoCardComponent } from './components/single-todo-card/single-todo-card.component';
import { IsDonePipe } from './pipes/is-done.pipe';

@NgModule({
    declarations: [
        TodosListComponent,
        SingleTodoPageComponent,
        SingleTodoCardComponent,
        IsDonePipe
    ],
    imports: [
        CommonModule,
        TodoRoutingModule
    ],
    providers: [
        TodoService
    ]
})
export class TodoModule { }
