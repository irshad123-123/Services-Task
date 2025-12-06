import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of } from "rxjs";


@Injectable({
    providedIn : 'root'
})
export class Todo4Service{
    todo4Arr : Array<Itodo>=[
        {
            todoItem : 'Component',
            todoId : '123'
        },
        {
            todoItem : 'Attribute',
            todoId : '124'
        },
        {
            todoItem : 'Structral',
            todoId : '125'
        }
    ]
    featchAllAPI(){
        return of(this.todo4Arr)
    }
    addDirective(todo:Itodo){
        this.todo4Arr.push(todo)
    }
}