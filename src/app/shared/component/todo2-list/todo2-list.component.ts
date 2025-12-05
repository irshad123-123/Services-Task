import { Component, OnInit } from '@angular/core';
import { Todo2Service } from '../../service/todo2.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo2-list',
  templateUrl: './todo2-list.component.html',
  styleUrls: ['./todo2-list.component.scss']
})
export class Todo2ListComponent implements OnInit {
  todo2Arr : Array<Itodo> = []
  constructor(private _todoService : Todo2Service) { }

  ngOnInit(): void {
    this._todoService.featchAllAPI()
      .subscribe((res)=>{
        this.todo2Arr = res
      })
  }

}
