import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTodoPageComponent } from './single-todo-page.component';

describe('SingleTodoPageComponent', () => {
  let component: SingleTodoPageComponent;
  let fixture: ComponentFixture<SingleTodoPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleTodoPageComponent]
    });
    fixture = TestBed.createComponent(SingleTodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
