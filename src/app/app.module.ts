import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './shared/component/todo-list/todo-list.component';
import { TodoFormComponent } from './shared/component/todo-form/todo-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { Todo1ListComponent } from './shared/component/todo1-list/todo1-list.component';
import { Todo1FormComponent } from './shared/component/todo1-form/todo1-form.component';
import { Todo2ListComponent } from './shared/component/todo2-list/todo2-list.component';
import { Todo2FormComponent } from './shared/component/todo2-form/todo2-form.component';
import { Todo3ListComponent } from './shared/component/todo3-list/todo3-list.component';
import { Todo3FormComponent } from './shared/component/todo3-form/todo3-form.component';
import { Todo4ListComponent } from './shared/component/todo4-list/todo4-list.component';
import { Todo4FormComponent } from './shared/component/todo4-form/todo4-form.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MobileListComponent } from './shared/component/mobile-list/mobile-list.component';
import { MobileFormComponent } from './shared/component/mobile-form/mobile-form.component';



@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    Todo1ListComponent,
    Todo1FormComponent,
    Todo2ListComponent,
    Todo2FormComponent,
    Todo3ListComponent,
    Todo3FormComponent,
    Todo4ListComponent,
    Todo4FormComponent,
    MobileListComponent,
    MobileFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
