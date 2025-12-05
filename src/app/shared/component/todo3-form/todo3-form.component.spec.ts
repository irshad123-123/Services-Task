import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo3FormComponent } from './todo3-form.component';

describe('Todo3FormComponent', () => {
  let component: Todo3FormComponent;
  let fixture: ComponentFixture<Todo3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo3FormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
