import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent implements OnInit {
  
  constructor(private Demoservice: DemoService){}

  apiData: any;
  userById: any;
  newUser = { id: 6, name: 'John Doe', email: 'john.doe@example.com' };
  updatedUser = { id: 6, name: 'John Smith', email: 'john.smith@example.com' };
  
  ngOnInit(): void {    
    this.Demoservice.getValuesFromApi().subscribe({
      next: (data) => {
        console.log('Data received:', data);
        this.apiData = data; // Store API response
      },
      error: (error) => {
        console.error('Error fetching data:', error);
      }
    });
  }
// Get all users
getAllUsers() {
  this.Demoservice.getValuesFromApi().subscribe({
    next: (data) => {
      console.log('All users:', data);
      this.apiData = data;
    },
    error: (error) => {
      console.error('Error fetching all users:', error);
    },
  });
}
  // Get user by ID
  getUserById(id: number){
    this.Demoservice.getUserById(id).subscribe({
      next: (data) => {
        console.log(`User with ID ${id}:`, data);
        this.userById = data;
      },
      error: (error) => {
        console.error(`Error fetching user with ID ${id}:`, error);
      }
    });
  }
  // Add a new user
  addUser() {
    this.Demoservice.addUser(this.newUser).subscribe({
      next: (data) => {
        console.log('User added:', data);
        this.getAllUsers(); // Refresh the user list
      },
      error: (error) => {
        console.error('Error adding user:', error);
      },
    });
  }
  // Update a user
  updateUser(formData: { id: number; name: string; email: string }) {
    const { id, name, email } = formData;
    this.Demoservice.updateUser(id, { id, name, email }).subscribe({
      next: (response) => {
        console.log('User updated successfully:', response);
        alert('User updated successfully!');
      },
      error: (error) => {
        console.error('Error updating user:', error);
        alert('Error updating user.');
      },
    });
  }
  // Delete a user
  deleteUser(id: number) {
    this.Demoservice.deleteUser(id).subscribe({
      next: () => {
        console.log(`User with ID ${id} deleted`);
        this.getAllUsers(); // Refresh the user list
      },
      error: (error) => {
        console.error(`Error deleting user with ID ${id}:`, error);
      },
    });
  }
}
