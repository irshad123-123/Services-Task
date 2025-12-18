import { Component, OnInit, ViewChild } from '@angular/core';
import { Todo1Service } from '../../service/todo1.service';
import { UuidService } from '../../service/uuid.service';
import { NgForm } from '@angular/forms';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo1-form',
  templateUrl: './todo1-form.component.html',
  styleUrls: ['./todo1-form.component.scss']
})
export class Todo1FormComponent implements OnInit {
  @ViewChild('addLab') form ! : NgForm
  isEditMode : boolean = false
  constructor(
    private _todo1Service : Todo1Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.editLib()
  }
  editLib(){
    this._todo1Service.lib$
      .subscribe({
        next : res =>{
          this.form.form.patchValue(res)
          this.isEditMode = true
          this.editObj = res
        },
        error :err =>console.log(err)
      })
  }
  onAddLib(){
    if(this.form.valid){
      let obj : Itodo={
      ...this.form.value,
      todoId : this._uuidService.Uuid()
    }
    this._todo1Service.createLib(obj)
    this.form.reset()
    this._snackBar.snackBar('The new libarery is added successfully!!!')
    }
  }
  editObj ! : Itodo
  onUpdate(){
    let Obj = {
      ...this.form.value,
      todoId : this.editObj.todoId
    }
    this._todo1Service.updateLib(Obj)
    this.isEditMode = false
    this.form.reset()
  }

}
