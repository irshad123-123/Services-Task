import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo2FormComponent } from './todo2-form.component';

describe('Todo2FormComponent', () => {
  let component: Todo2FormComponent;
  let fixture: ComponentFixture<Todo2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo2FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
