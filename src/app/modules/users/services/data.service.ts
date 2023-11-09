import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable } from 'rxjs';

export const GET_USERS_API = 'https://reqres.in/api/users';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getUsers(userCount: number): Observable<any> {
    return this.http
      .get(GET_USERS_API, {
        params: {
          per_page: userCount,
        },
      })
      .pipe(
        catchError(() => {
          return [];
        })
      );
  }
}
