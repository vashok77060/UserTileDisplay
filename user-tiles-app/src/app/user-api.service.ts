import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    //return this.http.get<User[]>(this.apiUrl);
    return this.http.get<User[]>(this.apiUrl).pipe(delay(500));
  }
}