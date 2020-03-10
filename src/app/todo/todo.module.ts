import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TodoListComponent} from './list/list.component';
import {TodoComponent} from './todo.component';
import {TodoRoutingModule} from './todo.routing.module';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {TodoService} from './todo.service';
import {InputTextModule} from 'primeng';

@NgModule({
  declarations: [
    TodoListComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [

  ]
})
export class TodoModule {
}
