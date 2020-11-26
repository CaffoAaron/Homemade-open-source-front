import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './pages/home/home.component';
import { MenbresiaComponent } from './pages/menbresia/menbresia.component';
import { MenbresiaDatosComponent } from './pages/menbresia-datos/menbresia-datos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { RecipeDetailComponent } from './pages/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './pages/recipe-edit/recipe-edit.component';
import { RecipeCreateComponent } from './pages/recipe-create/recipe-create.component';
import { SearchRecipeComponent } from './pages/search-recipe/search-recipe.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { MenuTableComponent } from './pages/menu-table/menu-table.component';
// import { EditMenuComponent } from './pages/edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenbresiaComponent,
    MenbresiaDatosComponent,
    PerfilComponent,
    RecipeDetailComponent,
    RecipeEditComponent,
    RecipeCreateComponent,
    SearchRecipeComponent,
    RegisterComponent,
    LoginFormComponent,
    MenuTableComponent,
    // EditMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
