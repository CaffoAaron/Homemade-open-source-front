import { Component, OnInit } from '@angular/core';
import {HomemadeApiService} from '../../services/homemade-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Array<any>;
  constructor(private homemadeApi: HomemadeApiService) {}
  ngOnInit(): void {
    this.homemadeApi.getAllRecipes().subscribe(data => this.recipes = data);
  }
}
