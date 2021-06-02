import { NgModule, Provider, Type } from '@angular/core';
import { SharedAComponent } from './components/shared-a/shared-a.component';
import { AService } from './services/a.service';


@NgModule({ providers: [AService] })
export class A {}

@NgModule({ imports: [A] })
export class B {}

// angular imports
interface ModuleWithProviders {
  ngModule: Type<any>;
  providers?: Provider[];
}

// @NgModule({})
// class A {}
//
// const moduleWithProviders = {
//   ngModule: A,
//   providers: [AService]
// };
//
// @NgModule({
//   imports: [moduleWithProviders]
// })
// export class B {}

@NgModule({
  exports: [
    SharedAComponent
  ],
  declarations: [
    SharedAComponent,
  ]
})
export class SharedModule {
  static forRoot(): any {
    return {ngModule: SharedModule, providers: [AService]};
  }
  static forChild(): any {
    return {ngModule: SharedModule, providers: []};
  }
}
