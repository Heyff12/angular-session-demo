import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PreloadingComponent } from './components/preloading/preloading.component';



@NgModule({
  declarations: [
    PreloadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PreloadingComponent
  ]
})
export class PreloadingModule { }
