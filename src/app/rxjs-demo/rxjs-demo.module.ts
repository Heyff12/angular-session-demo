import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { GameDemoComponent } from './game-demo/game-demo.component';
import { RxjsDemoComponent } from './rxjs-demo.component';
import { OneToAllComponent } from './one-to-all/one-to-all.component';
import { AllToOneComponent } from './all-to-one/all-to-one.component';
import { MissionInfoComponent } from './one-to-all/mission-info/mission-info.component';
import { ExInfoComponent } from './one-to-all/ex-info/ex-info.component';
import { BagComponent } from './one-to-all/bag/bag.component';
import { WolfManComponent } from './one-to-all/wolf-man/wolf-man.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: RxjsDemoComponent,
  },
  {
    path: 'game',
    component: GameDemoComponent,
  },
  {
    path: 'one-to-all',
    component: OneToAllComponent,
  },
  {
    path: 'all-to-one',
    component: AllToOneComponent,
  }
];

@NgModule({
  declarations: [
    GameDemoComponent,
    RxjsDemoComponent,
    OneToAllComponent,
    AllToOneComponent,
    MissionInfoComponent,
    ExInfoComponent,
    BagComponent,
    WolfManComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
  ],
})
export class RxjsDemoModule {
}
