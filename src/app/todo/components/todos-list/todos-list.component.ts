import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import { Todo } from '../../../core/models/todo.model';

@Component({
    selector: 'app-todos-list',
    templateUrl: './todos-list.component.html',
    styleUrls: ['./todos-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {

    loading$!: Observable<boolean>;
    todos$!: Observable<Todo[]>;
    error$!: Observable<any>;

    constructor(
        private todoService: TodoService,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.initObservables();
        this.todoService.getAll();
    }

    private initObservables() {
        this.loading$ = this.todoService.loading$;
        this.error$ = this.todoService.error$;
        this.todos$ = this.todoService.todos$;
    }

    navigateTo(id: number) {
        this.router.navigateByUrl(`todos/${id}`);
    }

    toggleIsDone(id: number, isDone: boolean) {
        this.todoService.patchOne(id, { isDone: !isDone });
    }


}
