import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
  },
  {
    path: 'zone',
    component: ZoneComponent,
  },
];

@NgModule({
  declarations: [PerformanceComponent, ZoneComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PerformanceModule {}
