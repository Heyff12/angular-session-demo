import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component/dynamic-component.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

const routes: Routes = [
  {
    path: 'dynamic-component',
    loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule)
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
];

@NgModule({
  declarations: [DynamicComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
