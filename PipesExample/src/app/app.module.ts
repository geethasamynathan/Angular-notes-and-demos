import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { SquarepipePipe } from './squarepipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeTitlePipe,
    SquarepipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
