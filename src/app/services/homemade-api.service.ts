import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

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
    return this.http.put<any>('https://homemadeapi.azurewebsites.net/api/userchef/id?id=100', JSON.stringify(editPerfil), this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
