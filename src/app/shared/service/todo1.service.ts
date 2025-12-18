import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";


@Injectable({
    providedIn: 'root'
})
export class Todo1Service {
    todo1Arr: Array<Itodo> = [
        {
            todoItem: 'Bootstrap',
            todoId: '123'
        },
        {
            todoItem: 'Angular Material',
            todoId: '124'
        },
        {
            todoItem: 'PrimeNG',
            todoId: '125'
        }
    ]

    constructor(private _snackBar: SnackBarService) { }
    lib$: Subject<Itodo> = new Subject()
    featchAllAPI() {
        return of(this.todo1Arr)
    }
    createLib(todo: Itodo) {
        this.todo1Arr.push(todo)
    }
    removeLib(id: string) {
        let getIndex = this.todo1Arr.findIndex(f => f.todoId === id)
        this.todo1Arr.splice(getIndex, 1)
        this._snackBar.snackBar('The library is removed successfully !!!')
    }
    updateLib(obj: Itodo) {
        let getIndex = this.todo1Arr.findIndex(f => f.todoId == obj.todoId)
        this.todo1Arr[getIndex] = obj
        this._snackBar.snackBar('The library is updated successfully !!!')
    }
}