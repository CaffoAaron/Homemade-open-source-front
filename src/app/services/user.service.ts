import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = 'https://homemade20201124161107.azurewebsites.net/api/recipe/id?id=';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAll(id): Observable<any> {
    return this.http.get(API_URL + id);
  }
}
