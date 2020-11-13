import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HomemadeApiService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };
  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }
  getAllRecipes(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/recipe');
  }
  getUserchef(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/userchef');
  }
  updateHero(): Observable<User> {
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
    return this.http.put<User>('https://homemadeapi.azurewebsites.net/api/userchef/id?id=100', editPerfil, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
  getStepRecipeId(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/recipesteps/recipeid?recipeId=1');
  }
  getIngredient(): any{
    return this.http.get('https://homemadeapi.azurewebsites.net/api/ingredient');
  }
}
