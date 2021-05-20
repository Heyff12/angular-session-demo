import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponent,
  },
  {
    path: 'view-container-ref',
    component: ViewContainerRefComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DynamicComponentRouter {}
