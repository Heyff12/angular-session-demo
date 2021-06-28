import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipe/gender.pipe';
import { HeroComponent } from './pipe/hero.component';
import { CountComponent } from './changeDetection/count.component';
import { DataComponent } from './onPush/data.component';
import { ListComponent } from './onPush/list.component';

const routes: Routes = [
  {
    path: '',
    component: PerformanceComponent,
  },
  {
    path: 'zone-js',
    component: ZoneComponent,
  },
  {
    path: 'change-detection',
    component: CountComponent,
  },
  {
    path: 'pipe',
    component: HeroComponent,
  },
  {
    path: 'on-push',
    component: DataComponent,
  },
];

@NgModule({
  declarations: [
    PerformanceComponent,
    ZoneComponent,
    GenderPipe,
    CountComponent,
    HeroComponent,
    DataComponent,
    ListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PerformanceModule {}
