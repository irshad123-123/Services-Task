import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo2ListComponent } from './todo2-list.component';

describe('Todo2ListComponent', () => {
  let component: Todo2ListComponent;
  let fixture: ComponentFixture<Todo2ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo2ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
