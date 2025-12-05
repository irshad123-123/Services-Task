import { Component, OnInit } from '@angular/core';
import { Todo3Service } from '../../service/todo3.service';
import { Itodo } from '../../models/todo';

@Component({
  selector: 'app-todo3-list',
  templateUrl: './todo3-list.component.html',
  styleUrls: ['./todo3-list.component.scss']
})
export class Todo3ListComponent implements OnInit {
  todo3Arr : Array<Itodo> = []
  constructor(private _todo3Service : Todo3Service) { }

  ngOnInit(): void {
    this._todo3Service.featchAllAPI()
      .subscribe((res)=>{
        this.todo3Arr = res
      })
  }

}
