import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn : 'root'
})
export class Todo2Service{
    todo2Arr : Array<Itodo>=[
        {
            todoItem : 'We Love JS',
            todoId : '123'
        },
        {
            todoItem : 'We Love Angular',
            todoId : '124'
        },
        {
            todoItem : 'We Love Java',
            todoId : '125'
        }
    ]
    constructor(private _snackBar : SnackBarService){}
    Lang$ : Subject<Itodo> = new Subject()
    featchAllAPI(){
        return of(this.todo2Arr)
    }
    createLang(todo : Itodo){
        this.todo2Arr.push(todo)
        this._snackBar.snackBar('The new language is added successfully !!!')
    }
    removeLang(id : string){
        let getIndex = this.todo2Arr.findIndex(f=>f.todoId == id)
        this.todo2Arr.splice(getIndex,1)
        this._snackBar.snackBar('The new language is removed successfully !!!')
    }
    updateLang(Obj : Itodo){
        let getIndex = this.todo2Arr.findIndex(f=>f.todoId == Obj.todoId)
        this.todo2Arr[getIndex] = Obj
        this._snackBar.snackBar('The language is updated successfully !!!')
    }
}