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
import { ParentBComponent } from './components/injector-hierarchy/parent-b/parent-b.component';
import { ChildBComponent } from './components/injector-hierarchy/child-b/child-b.component';
import { ResolutionModifierComponent } from './components/resolution-modifiers/resolution-modifier/resolution-modifier.component';
import { ServiceRegistryComponent } from './components/service-registry/service-registry/service-registry.component';
import { CreateDependencyContainerComponent } from './components/dependencies/create-dependency-container/create-dependency-container.component';
import { UserService } from './services/user.service';
import { UserTestService } from './services/user-test.service';
import { SharedModule } from '../shared/shared.module';
import { ForChildComponent } from './components/for-child/for-child/for-child.component';

const userValue = { value: 'useValue' };

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
    OptionalComponent,
    ParentBComponent,
    ChildBComponent,
    ResolutionModifierComponent,
    ServiceRegistryComponent,
    CreateDependencyContainerComponent,
    ForChildComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModuleARoutingModule,
    PreloadingModule,
    SharedModule.forChild(),
  ],
  providers: [
    RandomSingleton2Service,
    UserService,
    // { provide: UserService, useClass: UserService },
    // { provide: UserService, useClass: UserTestService },
    // { provide: UserService, useValue: userValue },
    // { provide: UserService, useFactory: () => {
    //     console.log('useFactory');
    //     return new UserTestService();
    //   },
    // },
    // { provide: UserService, useExisting: UserTestService },
  ],
  exports: [
    IfEmptyPipe,
    ComponentAComponent,
  ],
  entryComponents: []
})
export class ModuleAModule { }
