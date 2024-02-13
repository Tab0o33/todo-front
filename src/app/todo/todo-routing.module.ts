import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { SingleTodoPageComponent } from './components/single-todo-page/single-todo-page.component';

const routes: Routes = [
    { path: ':id', component: SingleTodoPageComponent },
    { path: '', component: TodosListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodoRoutingModule { }
