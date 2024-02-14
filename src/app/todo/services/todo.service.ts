import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, delay, map, switchMap, take, tap } from 'rxjs';
import { Todo } from '../../core/models/todo.model';
import { environment } from '../../../environments/environment';
import { PatchTodoDto } from '../dto/patch-todo.dto';

@Injectable()
export class TodoService {

    private publicTodosApiUrl = `${environment.apiUrl}/public/todos`;

    private _loading$ = new BehaviorSubject<boolean>(true);
    get loading$(): Observable<boolean> {
        return this._loading$.asObservable();
    }

    private _todos$ = new BehaviorSubject<Todo[]>([]);
    get todos$(): Observable<Todo[]> {
        return this._todos$.asObservable();
    }

    private lastTodosLoad = 0;

    constructor(private http: HttpClient) { }

    private getAllFromServer(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.publicTodosApiUrl);
    }

    getAll() {
        if (Date.now() - this.lastTodosLoad <= 10000) {
            return;
        }
        this.setLoadingStatus(true);
        this.getAllFromServer().pipe(
            delay(1000),
            tap(todos => {
                this.lastTodosLoad = Date.now();
                this._todos$.next(todos);
                this.setLoadingStatus(false);
            })
        ).subscribe();
    }

    private getOneFromServer(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.publicTodosApiUrl}/${id}`);
    }

    getOne(id: number): Observable<Todo> {
        if (!this.lastTodosLoad) {
            this.setLoadingStatus(true);
            return this.getOneFromServer(id).pipe(
                delay(1000),
                tap(() => {
                    this.setLoadingStatus(false);
                })
            );
        } else {
            return this.todos$.pipe(
                map(todos => todos.filter(todo => todo.id === id)[0])
            );
        }

    }

    private patchOneFromServer(id: number, todo: PatchTodoDto): Observable<Object> {
        return this.http.patch<Object>(`${this.publicTodosApiUrl}/${id}`, todo);
    }

    patchOne(id: number, todoModifications: PatchTodoDto): void {
        this.todos$.pipe(
            take(1),
            map(todos => todos.map(todo => todo.id === id ?
                { ...todo, ...todoModifications } :
                todo)
            ),
            tap(updatedTodos => this._todos$.next(updatedTodos)),
            switchMap(() => this.patchOneFromServer(id, todoModifications)
            )
        ).subscribe();
    }

    private setLoadingStatus(loading: boolean) {
        this._loading$.next(loading);
    }

}
