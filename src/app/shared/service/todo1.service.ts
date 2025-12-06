import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of } from "rxjs";


@Injectable({
    providedIn : 'root'
})
export class Todo1Service{
    todo1Arr : Array<Itodo>=[
        {
            todoItem : 'Bootstrap',
            todoId : '123'
        },
         {
            todoItem : 'Angular Material',
            todoId : '124'
        },
         {
            todoItem : 'PrimeNG',
            todoId : '125'
        }
    ]

    featchAllAPI(){
        return of(this.todo1Arr)
    }
    createLib(todo : Itodo){
        this.todo1Arr.push(todo)
    }
}