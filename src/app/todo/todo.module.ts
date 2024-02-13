import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoService } from './services/todo.service';
import { TodosListComponent } from './components/todos-list/todos-list.component';

@NgModule({
    declarations: [
        TodosListComponent
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
