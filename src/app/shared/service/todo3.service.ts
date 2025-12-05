import { Injectable } from "@angular/core";
import { Itodo } from "../models/todo";
import { of } from "rxjs";


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
    featchAllAPI(){
        return of(this.todo3Arr)
    }
}