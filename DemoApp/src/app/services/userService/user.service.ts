import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient : HttpClient) { }

  getUserFromServer() : Observable<any> {
    return this.httpClient.get('https://localhost:7122/api/User');
 }

 AddUserFromServer(userData: any): Observable<any> {
    return this.httpClient.post('https://localhost:7122/api/User', userData, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
    
}
