import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IUser } from '../IUser';

@Injectable({
  providedIn: 'root'
})
export class DemoService{

  constructor(private httpClient: HttpClient) { }
  getValues(): string[] {
    throw new Error('Method not implemented.');
  }
  getValuesFromAPI():Observable<any>{
    return this.httpClient.get('https://localhost:7122/api/User');
   }
   createUser(user:IUser): Observable<IUser> {
    return this.httpClient.post<IUser>('https://localhost:7122/api/User', user);
  }
  deleteUser(id: number): Observable<boolean> {
    return this.httpClient.delete<boolean>(`https://localhost:7122/api/User/${id}`); // Send DELETE request to API
  }
  updateUser(user: IUser): Observable<any> {
    return this.httpClient.put(`https://localhost:7122/api/User/${user.id}`, user); // HTTP PUT request to update the user
  }
}
