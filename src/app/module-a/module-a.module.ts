import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { IfEmptyPipe } from './pipes/if-empty.pipe';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    IfEmptyPipe,
    HighlightDirective
  ],
  imports: [
    CommonModule,
    RouterModule
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
