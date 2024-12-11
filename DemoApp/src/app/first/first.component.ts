import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  apiUsers: any[] = []; 
  apiUser: any = {};   
  userId: number = 1;   
  newUser: any = { name: '', email: '' }; 
  updateUserData: any = { id: 0, name: '', email: '' }; 

  constructor(private demoservice: DemoService) {}

  ngOnInit(): void {
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.demoservice.getUsers().subscribe(
      (data) => {
        this.apiUsers = data;
      }
    );
  }

  fetchUserById() {
    if (this.userId) {
      this.demoservice.getUsersById(this.userId).subscribe(
        (data) => {
          this.apiUser = data; 
        }
      );
    }
  }

  createUser() {
    if (this.newUser.name && this.newUser.email) {
      this.demoservice.createUser(this.newUser).subscribe(
        (data) => {
          console.log('User created:', data);
          this.apiUsers.push(data); 
          this.newUser = { id: 0, name: '', email: '' };
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    } else {
      alert('Please fill in both name and email.');
    }
  }

  updateUser() {
    if (this.updateUserData.id && this.updateUserData.name && this.updateUserData.email) {
      this.demoservice.updateUser(this.updateUserData.id, this.updateUserData).subscribe(
        (data) => {
          console.log('User updated:', data);
          const index = this.apiUsers.findIndex(user => user.id === this.updateUserData.id);
          if (index !== -1) {
            this.apiUsers[index] = data;  
          }
          this.updateUserData = { id: 0, name: '', email: '' };  
        }
      );
    } 
  }

  deleteUser() {
    if (this.userId) {
      this.demoservice.deleteUser(this.userId).subscribe(
        (data) => {
          console.log('User deleted:', data);
          this.apiUsers = this.apiUsers.filter(user => user.id !== this.userId); 
          this.userId = 0;  
        }
      );
    }
  }
}
