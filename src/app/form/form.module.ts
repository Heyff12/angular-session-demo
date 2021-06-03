import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {FormRouter} from './form.router'
import { FormComponent } from './form.component';
import {FormItemComponent} from './formItem/form-item.component'
import { NgGroupComponent } from './ng-group/ng-group.component';
import { AppComponent } from './dynamic-form/app.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question.component';

@NgModule({
  declarations: [
    FormComponent,
    FormItemComponent,
    NgGroupComponent,
    AppComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent,
  ],
  imports: [
    CommonModule,
    FormRouter,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormModule { }
