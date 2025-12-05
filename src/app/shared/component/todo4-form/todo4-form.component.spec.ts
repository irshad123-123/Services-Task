import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo4FormComponent } from './todo4-form.component';

describe('Todo4FormComponent', () => {
  let component: Todo4FormComponent;
  let fixture: ComponentFixture<Todo4FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo4FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo4FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
