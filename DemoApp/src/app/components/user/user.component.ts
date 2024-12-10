import { Component, OnInit } from '@angular/core';
import { DemoService } from '../../services/demo.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users: any[] = [];
  userForm = {
    id: '',
    name: '',
    email: '',
  };

  constructor(private userService: DemoService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

  addUser(): void {
    this.userService.addUser(this.userForm).subscribe(() => {
      this.loadUsers();
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.userForm.id, this.userForm).subscribe(() => {
      this.loadUsers();
    });
  }

  deleteUser(id: string): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  editUser(user: any): void {
    this.userForm = { ...user };
  }

  clearForm(): void {
    this.userForm = { id: '', name: '', email: '' };
  }
}
