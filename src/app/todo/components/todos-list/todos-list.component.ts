import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {

    todos$!: Observable<Todo[]>;

    constructor(
        private todoService: TodoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.todos$ = this.todoService.getTodos();
    }

    navigateTo(id: number) {
        this.router.navigateByUrl(`todos/${id}`);
    }

}
