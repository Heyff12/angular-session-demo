import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCComponent } from './components/component-c/component-c.component';
import { ModuleBRoutingModule } from './module-b.router';



@NgModule({
  declarations: [
    ComponentCComponent
  ],
  imports: [
    CommonModule,
    ModuleBRoutingModule
  ]
})
export class ModuleBModule { }
