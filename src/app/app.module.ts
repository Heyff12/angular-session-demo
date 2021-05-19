import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModuleAModule } from './module-a/module-a.module';
import { ServiceBService } from './module-a/services/service-b.service';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModuleAModule,
  ],
  exports: [],
  providers: [
    ServiceBService,
  ],
  entryComponents: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
