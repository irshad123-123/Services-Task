import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";


@Injectable({
    providedIn: 'root'
})
export class Todo4Service {
    todo4Arr: Array<Itodo> = [
        {
            todoItem: 'Component',
            todoId: '123'
        },
        {
            todoItem: 'Attribute',
            todoId: '124'
        },
        {
            todoItem: 'Structral',
            todoId: '125'
        }
    ]
     constructor(private _snackBar : SnackBarService){}
    directive$: Subject<Itodo> = new Subject()
    featchAllAPI() {
        return of(this.todo4Arr)
    }
    addDirective(todo: Itodo) {
        this.todo4Arr.push(todo)
        this._snackBar.snackBar('The new directive is added successfully !!!')
    }
    removeDirecitve(id: string) {
        let getIndex = this.todo4Arr.findIndex(f => f.todoId == id)
        this.todo4Arr.splice(getIndex, 1)
        this._snackBar.snackBar('The directive is removed successfully !!!')
    }
    updateDirective(Obj: Itodo) {
        let getIndex = this.todo4Arr.findIndex(f => f.todoId == Obj.todoId)
        this.todo4Arr[getIndex] = Obj
        this._snackBar.snackBar('The directive is updated successfully !!!')
    }
}