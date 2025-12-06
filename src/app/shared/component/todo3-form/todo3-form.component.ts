import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo3Service } from '../../service/todo3.service';
import { UuidService } from '../../service/uuid.service';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo3-form',
  templateUrl: './todo3-form.component.html',
  styleUrls: ['./todo3-form.component.scss']
})
export class Todo3FormComponent implements OnInit {
  @ViewChild('addCity') form ! : NgForm
  constructor(
    private _todo3Service : Todo3Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
  }
  onAddCity(){
    if(this.form.valid){
      let obj : Itodo={
        ...this.form.value,
        todoId : this._uuidService.Uuid()
      }
      this._todo3Service.addCity(obj)
      this.form.reset()
      this._snackBar.snackBar('The new city is added successfully!!!')
    }
  }

}
