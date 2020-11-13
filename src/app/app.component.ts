import {Component, OnInit} from '@angular/core';
import {HomemadeApiService} from './services/homemade-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'untitled';
  recipe: Array<any>;
  constructor(private homemadeApi: HomemadeApiService) {}
  ngOnInit(): void {
    this.homemadeApi.getAllRecipes().subscribe(data => this.recipe = data);
  }
}
