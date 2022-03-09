import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { AutorDetailComponent } from './autor-detail/autor-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    HomeComponent,
    ContactComponent,
    EmpleadosComponent,
    AutorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
