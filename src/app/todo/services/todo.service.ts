import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../core/models/todo.model';
import { environment } from '../../../environments/environment';

@Injectable()
export class TodoService {

    private publicTodosApiUrl = `${environment.apiUrl}/public/todos`;

    constructor(private http: HttpClient) { }

    getTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.publicTodosApiUrl);
    }

    getOne(id: number): Observable<Todo> {
        return this.http.get<Todo>(`${this.publicTodosApiUrl}/${id}`);
    }

}
