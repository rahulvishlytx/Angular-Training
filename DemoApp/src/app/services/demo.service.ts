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
  url:string='https://localhost:44328/api/User/';
  constructor(private httpClient : HttpClient) { }


  getAllUsersFromApi() : Observable<any> {
     return this.httpClient.get(this.url)
  }

  getUserByIdFromApi(id:number) : Observable<any> {
    return this.httpClient.get(this.url+id)
 }

  addUserToApi(id:any,name:any,email:any) : Observable<any> {
    let user = {id:id,name:name,email:email}
    return this.httpClient.post(this.url,user)
  }

  updateUserToApi(id:any,name:any,email:any) : Observable<any> {
    let user = {name:name,email:email}
    return this.httpClient.put(this.url+id,user)
  }

 deleteUserByIdFromApi(id:number) : Observable<any> {
  return this.httpClient.delete(this.url+id)
 }
  getValues(): Observable<any> {
    return of(this.listOfUser)
  }
}
