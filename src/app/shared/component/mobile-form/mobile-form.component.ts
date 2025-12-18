import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { flatMap } from 'rxjs';
import { UuidService } from '../../service/uuid.service';
import { MobileService } from '../../service/mobile.service';
import { SnackBarService } from '../../service/snack-bar.service';
import { Imob } from '../../models/mobile';

@Component({
  selector: 'app-mobile-form',
  templateUrl: './mobile-form.component.html',
  styleUrls: ['./mobile-form.component.scss']
})
export class MobileFormComponent implements OnInit {
  @ViewChild('mobRef') mobform ! : NgForm
  isEditMode : boolean = false
  private _uuidService = inject(UuidService)
  private _mobService = inject(MobileService)
  private _snackBar = inject(SnackBarService)
  constructor() { }

  updateObj ! : Imob
  ngOnInit(): void {
    this._mobService.editMob$
      .subscribe(res=>{
        this.mobform.form.patchValue(res)
        this.isEditMode = true;
        this.updateObj = res
      })
  }

  onAddMob(){
    if(this.mobform.valid){
      let obj = {
        ...this.mobform.value,
        mobId : this._uuidService.Uuid()
      }
      console.log(obj);
      this._mobService.addMob(obj)
        .subscribe({
          next : (res=>{
            this._snackBar.snackBar('The new mobile is added successfully!!!')
          }),
          error : (err=>{
            this._snackBar.snackBar('Somthing went wrong !!!')
          })
        })
      this.mobform.reset()
    }
  }

  onUpdate(){
    let upadted_obj={
      ...this.mobform.value,
      mobId : this.updateObj.mobId
    }
    // console.log(upadted_obj);
    this._mobService.updateMobArr(upadted_obj)
    this.mobform.reset()
    this.isEditMode = false;
    this._snackBar.snackBar('The mobile name is upadated successfully!!!')
  }
}
