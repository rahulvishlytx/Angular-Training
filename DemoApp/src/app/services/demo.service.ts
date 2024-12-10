import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class DemoService{

  private baseUrl = 'http://localhost:5014/api/User'; // Replace with the actual API URL

  constructor(private http: HttpClient) {}

  // GET: Retrieve all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }

  // GET: Retrieve a single user by ID
  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }

  // POST: Add a new user
  addUser(user: User): Observable<void> {
    return this.http.post<void>(this.baseUrl, user, this.getHttpOptions());
  }

  // PUT: Update a user by ID
  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user, this.getHttpOptions());
  }

  // DELETE: Remove a user by ID
  deleteUser(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.baseUrl}/${id}`);
  }

  // HTTP options for POST and PUT requests
  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }
}
