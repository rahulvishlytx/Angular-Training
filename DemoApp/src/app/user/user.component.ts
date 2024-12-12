import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/userService/user.service';

@Component({
  selector: 'app-user',
  standalone: false,
  
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  userData : any;
  constructor(private userService : UserService ) {}

  ngOnInit(): void {
    this.userService.getUserFromServer().subscribe(
      (response) => {
        this.userData = response;
      }
    );
  }

}
