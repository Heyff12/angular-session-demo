import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form.component';
import { FormItemComponent} from './formItem/form-item.component';
import { NgGroupComponent } from './ng-group/ng-group.component';
import { AppComponent } from './dynamic-form/app.component';
import { NgFormBuilderComponent } from './ng-form-builder/ng-form-builder.component';
import { CustomValidatorComponent } from './custom-validator/custom-validator.component';
import { CustomValidator2Component } from './custom-validator2/custom-validator2.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

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
    path: 'template-driven-form',
    component: TemplateDrivenFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
  {
    path: 'group',
    component: NgGroupComponent,
  },
  {
    path: 'builder',
    component: NgFormBuilderComponent,
  },
  {
    path: 'validator',
    component: CustomValidatorComponent,
  },
  {
    path: 'validator2',
    component: CustomValidator2Component,
  },
  {
    path: 'dynamic',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRouter {}
