import { Injectable } from "@angular/core";
import { Imob } from "../models/mobile";
import { Observable, of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";


@Injectable({
    providedIn: 'root'
})
export class MobileService {
    constructor(private _snackBar: SnackBarService) { }
    mobArr: Array<Imob> = [
        {
            mobItem: 'OPPO',
            mobId: '123'
        },
        {
            mobItem: 'Samsung',
            mobId: '124'
        },
        {
            mobItem: 'Realme',
            mobId: '125'
        }
    ]

    editMob$: Subject<Imob> = new Subject()

    featchAllMob() {
        return of(this.mobArr)
    }
    addMob(mob: Imob) {
        this.mobArr.push(mob)
        this._snackBar.snackBar('The new mobile is added successfully...')
        return of(this.mobArr)
    }
    removeMob(id: string): Observable<string> {
        let isConfirm = confirm('Are you sure, Do you want to remove this mobile !!!')
        if (isConfirm) {
            // console.log(id);
            let getIndex = this.mobArr.findIndex(f => f.mobId === id)
            // console.log(getIndex);
            this.mobArr.splice(getIndex, 1)
            this._snackBar.snackBar('The mobile is removed successfully...')
        }
        return of(id)
    }
    updateMobArr(mobObj: Imob) {
        let getIndex = this.mobArr.findIndex(f => f.mobId === mobObj.mobId)
        this.mobArr[getIndex] = mobObj
        this._snackBar.snackBar('The mobile is updated successfully...')
    }
}