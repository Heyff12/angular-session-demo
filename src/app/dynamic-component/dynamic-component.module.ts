import { NgModule } from '@angular/core';
import { DynamicComponentRouter } from './dynamic-component.router';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';

@NgModule({
  declarations: [
    ElementRefComponent,
    TemplateRefComponent
  ],
  imports: [DynamicComponentRouter],
  providers: []
})
export class DynamicComponentModule {}
