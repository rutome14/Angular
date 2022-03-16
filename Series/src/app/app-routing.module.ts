import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleSerieComponent } from './components/detalle-serie/detalle-serie.component';
import { ListaSeriesComponent } from './components/lista-series/lista-series.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/series' },
  { path: 'series', component: ListaSeriesComponent },
  { path: 'series/:serieId', component: DetalleSerieComponent },
  { path: '**', redirectTo: '/series' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
