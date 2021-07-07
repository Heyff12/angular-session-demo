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
import { TemplateComponent } from './template/template.component';
import { DataService } from './template/data.service';
import { SexPipe } from './template/pipe/sex.pipe';
import { FormatTelephonePipe } from './template/pipe/formatTelephone.pipe';
import { FormatDatePipe } from './template/pipe/formatDate.pipe';

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
    path: 'template',
    component: TemplateComponent,
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
    TemplateComponent,
    SexPipe,
    FormatDatePipe,
    FormatTelephonePipe,
  ],
  providers: [DataService],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class PerformanceModule {}
