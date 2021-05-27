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
import { ParentComponent } from './components/resolution-modifiers/parent/parent.component';
import { ChildComponent } from './components/resolution-modifiers/child/child.component';
import { OptionalComponent } from './components/resolution-modifiers/optional/optional.component';
import { PreloadingModule } from '../preloading/preloading.module';

@NgModule({
  declarations: [
    ComponentAComponent,
    ComponentBComponent,
    IfEmptyPipe,
    HighlightDirective,
    RandomComponent,
    RandomSingletonComponent,
    ParentComponent,
    ChildComponent,
    OptionalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleARoutingModule,
    PreloadingModule
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
