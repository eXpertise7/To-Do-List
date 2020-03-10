import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo/list',
    pathMatch: 'full'
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(mod => mod.TodoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
