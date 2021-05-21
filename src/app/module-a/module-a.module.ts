import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { IfEmptyPipe } from './pipes/if-empty.pipe';
import { RouterModule } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { ModuleARoutingModule } from './module-a.router';
import { RandomComponent } from './components/random/random.component';
import { RandomSingletonComponent } from './components/random-singleton/random-singleton.component';
import { RandomSingleton2Service } from './services/random-singleton2.service';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    IfEmptyPipe,
    HighlightDirective,
    RandomComponent,
    RandomSingletonComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleARoutingModule
  ],
  providers: [
    RandomSingleton2Service,
  ],
  exports: [
    IfEmptyPipe,
    ComponentAComponent,
  ],
  entryComponents: []
})
export class ModuleAModule { }
