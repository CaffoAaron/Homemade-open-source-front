import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenbresiaComponent} from './pages/menbresia/menbresia.component';
import {MenbresiaDatosComponent} from './pages/menbresia-datos/menbresia-datos.component';
import {PerfilComponent} from './pages/perfil/perfil.component';
import {RecipeDetailComponent} from "./pages/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from './pages/recipe-edit/recipe-edit.component';
import {RecipeCreateComponent} from './pages/recipe-create/recipe-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menbresia', component: MenbresiaComponent},
  { path: 'menbresia/datos', component: MenbresiaDatosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'recipe/detail', component: RecipeDetailComponent},
  { path: 'recipe/edit', component: RecipeEditComponent},
  { path: 'recipe/create', component: RecipeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
