import { NgModule } from '@angular/core';
import { SharedAComponent } from './components/shared-a/shared-a.component';
import { AService } from './services/a.service';

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
