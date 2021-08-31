import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApphighlightDirective } from './apphighlight.directive';
import { Demo1Directive } from './demo1.directive';

@NgModule({
  declarations: [
    AppComponent,
    ApphighlightDirective,
    Demo1Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
