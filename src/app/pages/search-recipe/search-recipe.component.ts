import { Component, OnInit } from '@angular/core';
import {HomemadeApiService} from '../../services/homemade-api.service';



@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  recipes: Array<any>;
  constructor(private homemadeApi: HomemadeApiService) { }

  ngOnInit(): void {
    this.homemadeApi.getAllRecipes().subscribe(data => this.recipes = data);
  }
  search(): void{
    this.homemadeApi.getAllRecipesSearch().subscribe(data => this.recipes = data);
  }

}
