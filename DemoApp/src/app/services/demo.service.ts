import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  private apiUrl = 'https://localhost:7122/api/User';  

  constructor(private httpClient: HttpClient) { }

  getUsersById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.httpClient.get<any>(url);
  }

  getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.apiUrl);
  }

  createUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user, this.getHttpOptions());
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.httpClient.put<any>(`${this.apiUrl}/${id}`, user, this.getHttpOptions());
  }

  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }
}
