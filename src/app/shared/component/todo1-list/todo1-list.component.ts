import { Component, OnInit } from '@angular/core';
import { Todo1Service } from '../../service/todo1.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo1-list',
  templateUrl: './todo1-list.component.html',
  styleUrls: ['./todo1-list.component.scss']
})
export class Todo1ListComponent implements OnInit {
  todo1Arr : Array<Itodo> = []
  constructor(private _todo1Service : Todo1Service) { }

  ngOnInit(): void {
    this._todo1Service.featchAllAPI()
      .subscribe((res)=>{
        this.todo1Arr = res
      })
  }
  onRemove(id:string){
    let isConfirm = confirm('Are you sure, want to remove this library!!!')
    if(isConfirm){
        this._todo1Service.removeLib(id)
    }
  }
  onEdit(todo:Itodo){
    this._todo1Service.lib$.next(todo)
  }
}
