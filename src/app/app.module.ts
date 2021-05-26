import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModuleAModule } from './module-a/module-a.module';
import { ServiceBService } from './module-a/services/service-b.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { NgGroupComponent } from './ng-group/ng-group.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    HomePageComponent,
    TemplateDrivenFormComponent,
    NgGroupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToDoListModule,
    FlexLayoutModule,
    ModuleAModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [],
  providers: [
    ServiceBService,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
