import { NgModule } from '@angular/core';
import { DynamicComponentRouter } from './dynamic-component.router';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { TemplateRefComponent } from './template-ref/template-ref.component';
import { DynamicComponent } from './dynamic-component.component';
import { CommonModule } from '@angular/common';
import { TemplateRefChildComponent } from './template-ref/template-ref-child/template-ref-child.component';
import { ViewContainerRefComponent } from './view-container-ref/view-container-ref.component';
import { ComponentRefComponent } from './component-ref/component-ref.component';
import { ModalComponent } from './component-ref/modal/modal.component';
import { DragComponentComponent } from './drag-component/drag-component.component';
import { AgeComponent } from './drag-component/age/age.component';
import { GenderComponent } from './drag-component/gender/gender.component';
import { RegionComponent } from './drag-component/region/region.component';
import { HobbyComponent } from './drag-component/hobby/hobby.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      ElementRefComponent,
      TemplateRefComponent,
      DynamicComponent,
      TemplateRefChildComponent,
      ViewContainerRefComponent,
      ComponentRefComponent,
      ModalComponent,
      DragComponentComponent,
      AgeComponent,
      GenderComponent,
      RegionComponent,
      HobbyComponent
    ],
  imports: [DynamicComponentRouter, CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    ElementRefComponent
  ],
    providers: []
})
export class DynamicComponentModule {}
