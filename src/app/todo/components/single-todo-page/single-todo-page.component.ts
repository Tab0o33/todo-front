import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
    selector: 'app-single-todo-page',
    templateUrl: './single-todo-page.component.html',
    styleUrls: ['./single-todo-page.component.scss']
})
export class SingleTodoPageComponent implements OnInit {

    todo$!: Observable<Todo>;

    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        const todoId = +this.route.snapshot.params['id'];
        this.todo$ = this.todoService.getOne(todoId);
    }

}
