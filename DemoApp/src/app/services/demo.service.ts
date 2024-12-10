import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService{

  listOfUser = [
    { name: 'John', isActive: true },
    { name: 'Joe', isActive: true },
    { name: 'Mike', isActive: false },
    { name: 'Essan', isActive: true },
  ];
  constructor(private httpClient : HttpClient) { }


  getValuesFromApi() : Observable<any> {
     return this.httpClient.get('https://localhost:7122/api/User')
  }


  getValues(): Observable<any> {
    return of(this.listOfUser)
  }
}
