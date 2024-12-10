import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-first',
  standalone: false,
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})
export class FirstComponent implements OnInit {
  componentName: string = 'FirstComponent';

  twoBinding: string = 'Enter the name';

  srcUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  isActive: boolean = false;

  activeUsers: number = 1;

  cssClass: string = 'primary';
  cssClasses: string[] = ['primary', 'primaryextended'];

  listOfUser: any;
  apiData: any;
  userById: any;
  newUser = { id: 6, name: 'John Doe', email: 'john.doe@example.com' };
  updatedUser = { id: 6, name: 'John Smith', email: 'john.smith@example.com' };
  user = { id: 0, name: '', email: '' };
  userId: number = 0; // Store user ID input for fetching a user by ID

  constructor(private demoService: DemoService) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  // Get all users
  getAllUsers() {
    this.demoService.getValuesFromApi().subscribe({
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
  getUserById() {
    if (this.userId > 0) {
      // Ensure user ID is valid
      this.demoService.getUserById(this.userId).subscribe({
        next: (data) => {
          console.log(`User with ID ${this.userId}:`, data);
          this.userById = data; // Populate the userById object with fetched data
          this.user.id = data.id;
          this.user.name = data.name;
          this.user.email = data.email;
        },
        error: (error) => {
          console.error(`Error fetching user with ID ${this.userId}:`, error);
        },
      });
    } else {
      console.error('Please enter a valid user ID');
    }
  }

  // Add a new user
  addUser() {
    if (this.user.name && this.user.email) {
      this.demoService.addUser(this.user).subscribe({
        next: (data) => {
          console.log('User added:', data);
          this.getAllUsers(); // Refresh the user list
        },
        error: (error) => {
          console.error('Error adding user:', error);
        },
      });
    } else {
      console.error('Please fill all the required fields');
    }
  }

  // Update user
  updateUser() {
    if (this.user.id > 0 && this.user.name && this.user.email) {
      this.demoService.updateUser(this.user.id, this.user).subscribe({
        next: (data) => {
          console.log('User updated:', data);
          this.getAllUsers(); // Refresh the user list
        },
        error: (error) => {
          console.error('Error updating user:', error);
        },
      });
    } else {
      console.error('Please fill all the required fields');
    }
  }

  // Delete a user
  deleteUser(id: number) {
    if (id > 0) {
      this.demoService.deleteUser(id).subscribe({
        next: () => {
          console.log(`User with ID ${id} deleted`);
          this.getAllUsers(); // Refresh the user list
        },
        error: (error) => {
          console.error(`Error deleting user with ID ${id}:`, error);
        },
      });
    } else {
      console.error('Please enter a valid user ID to delete');
    }
  }

  onClick() {
    console.log('Button clicked');
  }

  setClass() {
    return this.activeUsers >= 10 ? 'primary' : 'secondary';
  }
}
