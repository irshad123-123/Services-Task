import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todo4ListComponent } from './todo4-list.component';

describe('Todo4ListComponent', () => {
  let component: Todo4ListComponent;
  let fixture: ComponentFixture<Todo4ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Todo4ListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todo4ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
