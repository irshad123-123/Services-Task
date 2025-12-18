import { Component, inject, OnInit } from '@angular/core';
import { MobileService } from '../../service/mobile.service';
import { Imob } from '../../models/mobile';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-mobile-list',
  templateUrl: './mobile-list.component.html',
  styleUrls: ['./mobile-list.component.scss']
})
export class MobileListComponent implements OnInit {
  mobArr1: Array<Imob> = []
  private _mobService = inject(MobileService)
  private _snackBar = inject(SnackBarService)
  editObj$ ! : Imob
  constructor() { }

  ngOnInit(): void {
    this._mobService.featchAllMob()
      .subscribe({
        next: (res => {
          this.mobArr1 = res
        }),
        error: (err => console.log(err))
      })
  }
  onRemove(id: string) {
    console.log(id);
    this._mobService.removeMob(id)
      .subscribe({
        next: (res => {
          if (!res) {
            this._snackBar.snackBar('This mobile is removed successfully!!!')
          }
        }),
        error: (err => {
          // console.log(err);
          this._snackBar.snackBar('Somthing went wrong !!!')
        })
      })
  }
  onEdit(mob:Imob){
    // console.log(mob);
    this._mobService.editMob$.next(mob)
  }
}
