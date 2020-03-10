import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo.component';
import {TodoListComponent} from './list/list.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    children: [
      {
        path: 'list',
        component: TodoListComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule {
}
