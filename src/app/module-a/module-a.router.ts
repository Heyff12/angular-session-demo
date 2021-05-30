import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ParentBComponent } from './components/injector-hierarchy/parent-b/parent-b.component';

const ROUTES = [
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
  },
  {
    path: 'injector-hierarchy',
    component: ParentBComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {
}
