import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { ComponentRefComponent } from './component-ref/component-ref.component';
import { DragComponentComponent } from './drag-component/drag-component.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponent,
  },
  {
    path: 'view-container-ref',
    component: ViewContainerRefComponent,
  },
  {
    path: 'component-ref',
    component: ComponentRefComponent
  },
  {
    path: 'drag-component',
    component: DragComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DynamicComponentRouter {}
