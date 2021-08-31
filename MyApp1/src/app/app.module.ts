import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { AboutComponent } from './about.component';
import { About1Component } from './about1/about1.component';
import { ClassbindingComponent } from './classbinding/classbinding.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { FormsModule } from '@angular/forms';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { TemplaterefComponent } from './templateref/templateref.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    AboutComponent,
    About1Component,
    ClassbindingComponent,
    StylebindingComponent,
    EventbindingComponent,
    TwowaybindingComponent,
    TemplaterefComponent,
    DirectivedemoComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
