import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DynamicComponent } from './dynamic-component/dynamic-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { PreloadStrategyService } from './preloading/services/preload-strategy.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'dynamic-component',
    loadChildren: () => import('./dynamic-component/dynamic-component.module').then(m => m.DynamicComponentModule)
  },
  {
    path: 'module-a',
    loadChildren: () => import('./module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'module-b',
    loadChildren: () => import('./module-b/module-b.module').then(m => m.ModuleBModule)
  },
  {
    path: 'preloading',
    loadChildren: () => import('./preloading/preloading.module').then(m => m.PreloadingModule),
    data: { preload: true }
  },
  {
    path: 'to-do-list',
    component: ToDoListComponent
  },
  {
    path: 'form',
    loadChildren: () => import('./form/form.module').then(m => m.FormModule)
  },
];

@NgModule({
  declarations: [DynamicComponent],
  imports: [RouterModule.forRoot(routes)],
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:  PreloadAllModules })], // preloading all modules
  // imports: [RouterModule.forRoot(routes, { preloadingStrategy:  PreloadStrategyService })], // preloading specific modules
  exports: [RouterModule]
})
export class AppRoutingModule { }
