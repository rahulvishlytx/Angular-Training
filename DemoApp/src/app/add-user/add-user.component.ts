import { Component } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-add-user',
  standalone: false,
  
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent {
  addeduserData = { name: '', email: '' , id: ''};


  constructor(private userService: UserService) {}

  addUser() {
    this.userService.AddUserFromServer(this.addeduserData).subscribe(
      (response) => {
        console.log('User added successfully:', this.addeduserData);

        this.addeduserData = { name: '', email: '' , id: ''};
      }
    );
  }
}
