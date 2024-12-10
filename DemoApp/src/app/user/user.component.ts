import { Component, OnInit } from '@angular/core';
import { DemoService, User } from '../services/demo.service';

@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: User[] = [];
  selectedUser: User | null = null;

  constructor(private userService: DemoService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUser(id: number): void {
    this.userService.getUser(id).subscribe(user => {
      this.selectedUser = user;
    });
  }

  addUser(): void {
    const newUser: User = { id: 0, name: 'John Doe', email: 'john.doe@example.com' };
    this.userService.addUser(newUser).subscribe(() => {
      this.loadUsers(); // Refresh the user list
    });
  }

  updateUser(): void {
    if (this.selectedUser) {
      const updatedUser: User = { ...this.selectedUser, name: 'Updated Name' };
      this.userService.updateUser(this.selectedUser.id, updatedUser).subscribe(() => {
        this.loadUsers(); // Refresh the user list
      });
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers(); // Refresh the user list
    });
  }
}
