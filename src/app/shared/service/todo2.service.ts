import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of } from "rxjs";

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

    featchAllAPI(){
        return of(this.todo2Arr)
    }
}