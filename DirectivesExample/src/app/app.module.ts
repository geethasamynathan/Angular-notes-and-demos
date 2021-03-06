import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgifdemoComponent } from './ngifdemo/ngifdemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { EmployeeTitlePipe } from './employee-title.pipe';
import { SamlpeComponent } from './samlpe/samlpe.component';
import { NgfordemoComponent } from './ngfordemo/ngfordemo.component';
import { NgifcgidemoComponent } from './ngifcgidemo/ngifcgidemo.component';

@NgModule({
  declarations: [
    AppComponent,
    NgifdemoComponent,
    PipedemoComponent,
    EmployeeTitlePipe,
    SamlpeComponent,
    NgfordemoComponent,
    NgifcgidemoComponent
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
