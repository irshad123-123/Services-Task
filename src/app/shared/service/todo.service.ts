import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of, Subject } from "rxjs";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn : 'root'
})
export class TodoService{
    todoArr : Array<Itodo> = [
        {
            todoItem : 'HTML',
            todoId : '123'
        },
        {
            todoItem : 'CSS',
            todoId : '124'
        },
        {
            todoItem : 'Javascript',
            todoId : '125'
        },
        {
            todoItem : 'Angular',
            todoId : '126'
        }
    ]
    constructor( private _snackBar : SnackBarService){}
    todo$ : Subject<Itodo> = new Subject()
    featchAllTodo(){
        return of(this.todoArr)
    }
    createTodo(todo : Itodo){
        this.todoArr.push(todo)
        this._snackBar.snackBar('The todoItem is added successfully !!!')
    }
    removeTodo(id:string){
        let getIndex = this.todoArr.findIndex(f=>f.todoId=== id)
        this.todoArr.splice(getIndex,1)
        this._snackBar.snackBar('The todoItem is removed successfully !!!')
    }
    updateTodo(obj : Itodo){
        let getIndex = this.todoArr.findIndex(f=>f.todoId == obj.todoId)
        this.todoArr[getIndex] = obj
        this._snackBar.snackBar('The todoItem is updated successfully !!!')
    }
}