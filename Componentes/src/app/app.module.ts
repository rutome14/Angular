import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { SumaComponent } from './suma/suma.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CronometroComponent } from './cronometro/cronometro.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    SumaComponent,
    CalculadoraComponent,
    CronometroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
