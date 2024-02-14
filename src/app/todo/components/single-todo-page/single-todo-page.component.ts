import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
    selector: 'app-single-todo-page',
    templateUrl: './single-todo-page.component.html',
    styleUrls: ['./single-todo-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTodoPageComponent implements OnInit {

    loading$!: Observable<boolean>;
    todo$!: Observable<Todo>;

    constructor(
        private todoService: TodoService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.initObservables();
    }

    private initObservables() {
        this.loading$ = this.todoService.loading$;
        this.todo$ = this.route.params.pipe(
            switchMap(params => this.todoService.getOne(+params['id']))
        );

    }

}
