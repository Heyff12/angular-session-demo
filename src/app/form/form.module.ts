import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormRouter} from './form.router'
import { FormComponent } from './form.component';
import {FormItemComponent} from './formItem/form-item.component'
import { NgGroupComponent } from './ng-group/ng-group.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormComponent,
    FormItemComponent,
    NgGroupComponent
  ],
  imports: [
    CommonModule,
    FormRouter,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
