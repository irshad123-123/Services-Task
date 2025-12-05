import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../service/todo.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todoArr : Array<Itodo> = []
  constructor(private _todoService : TodoService) { }

  ngOnInit(): void {
    this._todoService.featchAllTodo()
      .subscribe((res)=>{
        console.log(res);
        this.todoArr = res
      })
  }

}
