import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { PerformanceRouter } from './performance.router';

@NgModule({
  declarations: [PerformanceComponent],
  imports: [CommonModule, PerformanceRouter],
  exports: [],
  providers: []
})
export class PerformanceModule {}
