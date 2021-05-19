import { NgModule } from '@angular/core';
import { DynamicComponentRouter } from './dynamic-component.router';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { DynamicComponent } from './dynamic-component.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
      ElementRefComponent,
      TemplateRefComponent,
      DynamicComponent
    ],
    imports: [DynamicComponentRouter, CommonModule],
  exports: [
    ElementRefComponent
  ],
    providers: []
})
export class DynamicComponentModule {}
