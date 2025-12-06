import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo4Service } from '../../service/todo4.service';
import { UuidService } from '../../service/uuid.service';
import { Itodo } from '../../models/todo';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-todo4-form',
  templateUrl: './todo4-form.component.html',
  styleUrls: ['./todo4-form.component.scss']
})
export class Todo4FormComponent implements OnInit {
  @ViewChild('addDir') form ! : NgForm
  constructor(
    private _todo4Service : Todo4Service,
    private _uuidService : UuidService,
    private _snackBar : SnackBarService
  ) { }

  ngOnInit(): void {
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

}
