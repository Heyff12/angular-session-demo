import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class DynamicComponentRouter {}
