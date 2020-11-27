import { Component, OnInit } from '@angular/core';
import {HomemadeApiService} from '../../services/homemade-api.service';
import {TokenStorageService} from '../../services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  recipes: Array<any>;
  currentUser: any;
  constructor(private homemadeApi: HomemadeApiService, private tokenStorageService: TokenStorageService) {}
  ngOnInit(): void {
    this.currentUser = this.tokenStorageService.getUser();
    this.homemadeApi.getAllRecipesById(this.currentUser.id).subscribe(data => this.recipes = data);
  }
}
