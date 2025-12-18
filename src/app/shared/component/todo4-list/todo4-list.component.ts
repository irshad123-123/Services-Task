import { Component, OnInit } from '@angular/core';
import { Todo4Service } from '../../service/todo4.service';
import { Itodo } from '../../models/todo';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-todo4-list',
  templateUrl: './todo4-list.component.html',
  styleUrls: ['./todo4-list.component.scss']
})
export class Todo4ListComponent implements OnInit {
  todo4Arr : Array<Itodo> = []
  constructor(private _todo4Service : Todo4Service) { }

  ngOnInit(): void {
    this._todo4Service.featchAllAPI()
      .subscribe((res)=>{
        this.todo4Arr = res
      })
  }
  onRemove(id : string){
    let isConfirm = confirm('Are you sure, want to remove this directive !!!')
    if(isConfirm){
      this._todo4Service.removeDirecitve(id)
    }
  }
  onEdit(obj : Itodo){
    this._todo4Service.directive$.next(obj)
  }
}
