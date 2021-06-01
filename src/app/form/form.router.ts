import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import {FormItemComponent} from './formItem/form-item.component'
import { NgGroupComponent } from './ng-group/ng-group.component';

const routes: Routes = [
  {
    path: '',
    component: FormComponent,
  },
  {
    path: 'item',
    component: FormItemComponent,
  },
  {
    path: 'group',
    component: NgGroupComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FormRouter {}
