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
  isEditMode : boolean = false
  constructor(
    private _todo3Service : Todo3Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.onEdit()
  }
  onEdit(){
    this._todo3Service.city$
      .subscribe({
        next : res =>{
          this.form.form.patchValue(res)
          this.isEditMode = true
          this.editId = res.todoId
        },
        error : err =>{
          console.log(err) 
        }
      })
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
  editId ! : string
  onUpdate(){
    let Obj = {
      ...this.form.value,
      todoId : this.editId
    }
    this._todo3Service.updateCity(Obj)
    this.form.reset()
    this.isEditMode = false
  }
}
