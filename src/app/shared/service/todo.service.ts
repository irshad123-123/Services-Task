import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of } from "rxjs";

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

    featchAllTodo(){
        return of(this.todoArr)
    }
}