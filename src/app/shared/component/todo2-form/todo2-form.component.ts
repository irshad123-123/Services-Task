import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo2Service } from '../../service/todo2.service';
import { UuidService } from '../../service/uuid.service';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo2-form',
  templateUrl: './todo2-form.component.html',
  styleUrls: ['./todo2-form.component.scss']
})
export class Todo2FormComponent implements OnInit {
  @ViewChild('addLang') form ! : NgForm
  constructor(
    private _todo2Service : Todo2Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onAddLang(){
    if(this.form.valid){
      let obj : Itodo={
      ...this.form.value,
      todoId: this._uuidService.Uuid()
    }
    this._todo2Service.createLang(obj)
    this.form.reset()
    this._snackBar.snackBar('The new language is added successfully!!!')
    }
  }
}
