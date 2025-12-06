import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UuidService } from '../../service/uuid.service';
import { Itodo } from '../../models/todo';
import { TodoService } from '../../service/todo.service';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoItem') form ! : NgForm
  constructor(private _uuidService : UuidService,
              private _todoService : TodoService,
              private _matSnack : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onAddTodo(){
    if(this.form.valid){
      let obj : Itodo = {
      ...this.form.value,
      todoId : this._uuidService.Uuid()
    }
    console.log(obj);
    this._todoService.createTodo(obj)
    this.form.reset()
    this._matSnack.snackBar('The new todoItem is added successfully!!!')
    }
  }

}
