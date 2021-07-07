import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance.component';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone/zone.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GenderPipe } from './pipe/gender.pipe';
import { HeroComponent } from './pipe/hero.component';
import { CountComponent } from './change-detection/count.component';
import { DataComponent } from './on-push/data.component';
import { OnPushComponent } from './on-push/on-push.component';
import { SlowResponseComponent } from './slow-response/slow-response.component';
import { DataService } from './slow-response/data.service';

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
  {
    path: 'slow-response',
    component: SlowResponseComponent,
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
    OnPushComponent,
    SlowResponseComponent,
  ],
  providers: [DataService],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PerformanceModule {}
