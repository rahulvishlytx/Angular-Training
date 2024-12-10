import { Component } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { User } from '../models/User';

@Component({
  selector: 'app-second',
  standalone: false,
  
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  users:any = [];
  user:any
  userid:any 
  deleteUserId:any
  isDeleted:any
  newUserId:any
  newUserName:any
  newUserEmail:any
  isInserted:any
  id:any
  updateUserId:any
  updateUserName:any
  updateUserEmail:any
  isUpdated:any

  constructor(private httpservice: DemoService) { }

  getAllUsers() {
    this.httpservice.getAllUsersFromApi().subscribe((data: any) => {
      this.users = data;
      console.log(this.users);
    });
  }

  getUserById(userid:any) {
    this.httpservice.getUserByIdFromApi(userid).subscribe((data: any) => {
      this.user = data;
      console.log(this.user);
    });
  }

  addUser(id:any, name:any, email:any) {
    this.httpservice.addUserToApi(id,name,email).subscribe((data: any) => {
      this.isInserted=true
      console.log(data);
    });
  }

  updateUser(id:any, name:any, email:any) {
    this.httpservice.updateUserToApi(id,name,email).subscribe((data: any) => {
      this.isUpdated=true
      console.log(data);
    });
  }
  deleteUser(deleteUserid:any){
    this.httpservice.deleteUserByIdFromApi(deleteUserid).subscribe((data: any) => {
      this.isDeleted = data;
      console.log(this.isDeleted);
    })
  }
}
