import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/core/models/todo.model';

@Component({
    selector: 'app-single-todo-card',
    templateUrl: './single-todo-card.component.html',
    styleUrls: ['./single-todo-card.component.scss']
})
export class SingleTodoCardComponent {

    @Input() todo!: Todo;

}
