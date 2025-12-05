import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo3ListComponent } from './todo3-list.component';

describe('Todo3ListComponent', () => {
  let component: Todo3ListComponent;
  let fixture: ComponentFixture<Todo3ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo3ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo3ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
