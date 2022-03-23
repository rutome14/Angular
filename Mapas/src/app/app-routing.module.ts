import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaJsComponent } from './components/mapa-js/mapa-js.component';
import { MapaNgComponent } from './components/mapa-ng/mapa-ng.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/mapajs' },
  { path: 'mapajs', component: MapaJsComponent },
  { path: 'mapang', component: MapaNgComponent },
  { path: '**', redirectTo: '/mapajs' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
