import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ComponentAComponent } from './components/component-a/component-a.component';
import { ComponentBComponent } from './components/component-b/component-b.component';
import { ParentBComponent } from './components/injector-hierarchy/parent-b/parent-b.component';
import { ResolutionModifierComponent } from './components/resolution-modifiers/resolution-modifier/resolution-modifier.component';
import { ServiceRegistryComponent } from './components/service-registry/service-registry/service-registry.component';
import { CreateDependencyContainerComponent } from './components/dependencies/create-dependency-container/create-dependency-container.component';
import { ForChildComponent } from './components/for-child/for-child/for-child.component';
import { CreateInjectorComponent } from './components/create-injector/create-injector.component';

const ROUTES = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'component-a',
  },
  {
    path: 'component-a',
    component: ComponentAComponent,
  },
  {
    path: 'component-b',
    component: ComponentBComponent,
  },
  {
    path: 'service-registry',
    component: ServiceRegistryComponent,
  },
  {
    path: 'dependency-creation',
    component: CreateDependencyContainerComponent,
  },
  {
    path: 'injector-hierarchy',
    component: ParentBComponent,
  },
  {
    path: 'resolution-modifiers',
    component: ResolutionModifierComponent,
  },
  {
    path: 'create-injector',
    component: CreateInjectorComponent,
  },
  {
    path: 'for-child',
    component: ForChildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class ModuleARoutingModule {
}
