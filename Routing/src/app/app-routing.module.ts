import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorDetailComponent } from './autor-detail/autor-detail.component';
import { ContactComponent } from './contact/contact.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', component: HomeComponent },
  { path: 'info', component: InfoComponent },
  { path: 'informacion', redirectTo: '/info' },
  { path: 'contact', component: ContactComponent },
  // Colocar los dos puntos en una URL únicamente lo hacemos en la definición de la ruta.
  { path: 'empleados/:empleadoId', component: EmpleadosComponent },
  { path: 'autor/:autorId/libro/:libroId', component: AutorDetailComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

  // Info, Home, Contact


  // 