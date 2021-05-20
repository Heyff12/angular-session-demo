import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { IfEmptyPipe } from './pipes/if-empty.pipe';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { ModuleARoutingModule } from './module-a.router';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    IfEmptyPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleARoutingModule
  ],
  providers: [
  ],
  exports: [
    IfEmptyPipe,
    ComponentAComponent,
  ],
  entryComponents: []
})
export class ModuleAModule { }
