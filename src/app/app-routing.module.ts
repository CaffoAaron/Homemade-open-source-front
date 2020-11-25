import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {MenbresiaComponent} from './pages/menbresia/menbresia.component';
import {MenbresiaDatosComponent} from './pages/menbresia-datos/menbresia-datos.component';
import {PerfilComponent} from './pages/perfil/perfil.component';
import {RecipeDetailComponent} from "./pages/recipe-detail/recipe-detail.component";
import {RecipeEditComponent} from './pages/recipe-edit/recipe-edit.component';
import {RecipeCreateComponent} from './pages/recipe-create/recipe-create.component';
import {SearchRecipeComponent} from './pages/search-recipe/search-recipe.component';
import {RegisterComponent} from './pages/register/register.component';
import {MenuTableComponent} from "./pages/menu-table/menu-table.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'menbresia', component: MenbresiaComponent},
  { path: 'menbresia/datos', component: MenbresiaDatosComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'recipe/detail', component: RecipeDetailComponent},
  { path: 'recipe/edit', component: RecipeEditComponent},
  { path: 'recipe/create', component: RecipeCreateComponent},
  { path: 'recipe/search', component: SearchRecipeComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'menu', component: MenuTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
