import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoListModule } from './to-do-list/to-do-list.module';
import { HomePageComponent } from './home-page/home-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceBService } from './module-a/services/service-b.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormModule } from './form/form.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    HomePageComponent,
    TemplateDrivenFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToDoListModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule.forRoot(),
    FormModule
  ],
  exports: [],
  providers: [
    ServiceBService,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
