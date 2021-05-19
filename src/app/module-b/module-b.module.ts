import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCComponent } from './components/component-c/component-c.component';
import { ModuleAModule } from '../module-a/module-a.module';



@NgModule({
  declarations: [
    ComponentCComponent
  ],
  imports: [
    CommonModule,
    ModuleAModule
  ]
})
export class ModuleBModule { }
