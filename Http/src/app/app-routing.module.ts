import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormSeriesComponent } from './components/form-series/form-series.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'series', component: ListaSeriesComponent },
  { path: 'series/new', component: FormSeriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
