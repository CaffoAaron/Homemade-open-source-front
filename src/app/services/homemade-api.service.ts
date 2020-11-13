import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomemadeApiService {

  constructor(private http: HttpClient) { }
  getAllRecipes(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/recipe');
  }
  getUserchef(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/userchef');
  }
  updateHero(): Observable<any> {
    const editPerfil  =  {
      name: 'Aaron',
      lastname: 'Alva Caffo',
      password: '12345',
      email: 'aaroncampeon06@hotmail.com',
      picture: '',
      date: '2000-05-03T00:00:00',
      gender: false,
      certificate: ''
    };
    return this.http.put<any>('https://homemadeapi.azurewebsites.net/api/userchef/id?id=100', editPerfil);
  }
  getStepRecipeId(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/recipesteps/recipeid?recipeId=1');
  }
  getIngredient(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/ingredient');
  }
}
