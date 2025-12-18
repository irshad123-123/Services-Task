import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";


@Injectable({
    providedIn : 'root'
})
export class Todo3Service{
    todo3Arr : Array<Itodo>=[
        {
            todoItem : 'Maharashara',
            todoId : '123'
        },
                {
            todoItem : 'Latur',
            todoId : '124'
        },
                {
            todoItem : 'Udgir',
            todoId : '125'
        }
    ]
    constructor(private _snackBar : SnackBarService){}
    city$ : Subject<Itodo> = new Subject()
    featchAllAPI(){
        return of(this.todo3Arr)
    }
    addCity(todo : Itodo){
        this.todo3Arr.push(todo)
        this._snackBar.snackBar('The new city is added successfully !!!')
    }
        removeCity(id : string){
        let getIndex = this.todo3Arr.findIndex(f=>f.todoId == id)
        this.todo3Arr.splice(getIndex,1)
        this._snackBar.snackBar('The city is removed successfully !!!')
    }
    updateCity(Obj : Itodo){
        let getIndex = this.todo3Arr.findIndex(f=>f.todoId == Obj.todoId)
        this.todo3Arr[getIndex] = Obj
        this._snackBar.snackBar('The city is updated successfully !!!')
    }
}