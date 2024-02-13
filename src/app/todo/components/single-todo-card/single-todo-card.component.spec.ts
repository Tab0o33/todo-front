import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTodoCardComponent } from './single-todo-card.component';

describe('SingleTodoCardComponent', () => {
  let component: SingleTodoCardComponent;
  let fixture: ComponentFixture<SingleTodoCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTodoCardComponent]
    });
    fixture = TestBed.createComponent(SingleTodoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
