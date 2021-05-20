import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';

export const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'component-a',
  },
  {
    path: 'component-a',
    component: ComponentAComponent,
  },
  {
    path: 'component-b',
    component: ComponentBComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {
}
