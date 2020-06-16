import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentToViewComponent } from './component-to-view/component-to-view.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { StructuralComponent } from './structural/structural.component';
import { ChildComponent } from './components/child/child.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { LifecycleHookComponent } from './components/lifecycle-hook/lifecycle-hook.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentToViewComponent,
    TwoWayBindingComponent,
    StructuralComponent,
    ChildComponent,
    FormatDataPipe,
    LifecycleHookComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
