import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipe/gender.pipe';
import { HeroComponent } from './pipe/hero.component';
import { CountComponent } from './changeDetection/count.component';

const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
  },
  {
    path: 'zone',
    component: ZoneComponent,
  },
  {
    path: 'change-detection',
    component: CountComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
];

@NgModule({
  declarations: [
    PerformanceComponent,
    ZoneComponent,
    GenderPipe,
    CountComponent,
    HeroComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PerformanceModule {}
