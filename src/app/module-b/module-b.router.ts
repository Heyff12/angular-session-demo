import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentCComponent } from './components/component-c/component-c.component';

const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'component-c',
  },
  {
    path: 'component-c',
    component: ComponentCComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ModuleBRoutingModule {
}
