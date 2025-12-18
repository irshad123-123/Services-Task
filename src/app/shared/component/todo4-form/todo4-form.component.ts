import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo4Service } from '../../service/todo4.service';
import { UuidService } from '../../service/uuid.service';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../service/snack-bar.service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-todo4-form',
  templateUrl: './todo4-form.component.html',
  styleUrls: ['./todo4-form.component.scss']
})
export class Todo4FormComponent implements OnInit {
  @ViewChild('addDir') form ! : NgForm
  isEditMode : boolean = false
  constructor(
    private _todo4Service : Todo4Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
    this.onEdit()
  }
  onEdit(){
    this._todo4Service.directive$
      .subscribe({
        next : res =>{
          this.form.form.patchValue(res)
          this.isEditMode =true
          this.editId = res.todoId
        },
        error : err =>{
          console.log(err); 
        }
      })
  }
  onAddDir(){
    if(this.form.valid){
      let obj : Itodo={
      ...this.form.value,
      todoId : this._uuidService.Uuid()
    }
    this._todo4Service.addDirective(obj)
    this.form.reset()
    this._snackBar.snackBar('The new directive is added successfully!!!')
    }
  }
  editId !: string
  onUpdate(){
    let Obj = {
      ...this.form.value,
      todoId : this.editId
    }
    this._todo4Service.updateDirective(Obj)
    this.isEditMode = false
    this.form.reset()
  }
}
