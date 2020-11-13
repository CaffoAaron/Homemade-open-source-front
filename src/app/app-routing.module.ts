import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenbresiaComponent} from './pages/menbresia/menbresia.component';
import {MenbresiaDatosComponent} from './pages/menbresia-datos/menbresia-datos.component';
import {PerfilComponent} from './pages/perfil/perfil.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menbresia', component: MenbresiaComponent},
  { path: 'menbresia/datos', component: MenbresiaDatosComponent},
  { path: 'perfil', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
