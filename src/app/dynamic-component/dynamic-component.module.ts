import { NgModule } from '@angular/core';
import { DynamicComponentRouter } from './dynamic-component.router';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { DynamicComponent } from './dynamic-component.component';
import { CommonModule } from '@angular/common';
import { TemplateRefChildComponent } from './template-ref/template-ref-child/template-ref-child.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';

@NgModule({
    declarations: [
      ElementRefComponent,
      TemplateRefComponent,
      DynamicComponent,
      TemplateRefChildComponent,
      ViewContainerRefComponent
    ],
    imports: [DynamicComponentRouter, CommonModule],
  exports: [
    ElementRefComponent
  ],
    providers: []
})
export class DynamicComponentModule {}
