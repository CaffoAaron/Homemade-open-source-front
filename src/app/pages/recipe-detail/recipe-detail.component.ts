import { Component, OnInit } from '@angular/core';
import {HomemadeApiService} from "../../services/homemade-api.service";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  stepRecipes: Array<any>;
  ingredients: Array<any>;
  constructor(private homemadeApi: HomemadeApiService) { }
  ngOnInit(): void {
    this.homemadeApi.getStepRecipeId().subscribe(data => this.stepRecipes = data);
    this.homemadeApi.getIngredient().subscribe(data => this.ingredients = data);
  }

}
