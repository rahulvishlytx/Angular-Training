import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService{

  private apiUrl: string = 'https://localhost:7122/api/User';
  listOfUser = [
    { name: 'John', isActive: true },
    { name: 'Joe', isActive: true },
    { name: 'Mike', isActive: false },
    { name: 'Essan', isActive: true },
  ];
  constructor(private httpClient : HttpClient) { }

  // Get all users
  getValuesFromApi() : Observable<any> {
     return this.httpClient.get(this.apiUrl)
  }

  // Get user by ID
  getUserById(id: number): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/${id}`);
  }

  // Add a new user (POST)
  addUser(user: any): Observable<any> {
    return this.httpClient.post(this.apiUrl, user);
  }

  // Update a user (PUT)
  updateUserApi(id: number, user: { id: number; name: string; email: string }): Observable<any> {
    return this.httpClient.put(`${this.apiUrl}/${id}`, user);
  }

  // Delete a user
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
  }

  getValues(): Observable<any> {
    return of(this.listOfUser)
  }
}
