import { Component } from '@angular/core';
import { IUser } from '../IUser';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-users',
  standalone: false,
  
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  listOfUser :IUser[]=[];
  userName: string = '';
  emailId: string = '';
  constructor(private demoService: DemoService) { }
  ngOnInit(): void {
    this.getuser();
  }
  getuser(){
    this.demoService.getValuesFromAPI().subscribe((data)=>{
      
      this.listOfUser=data;});
  }
  deleteUser(id: number) {
    this.demoService.deleteUser(id).subscribe(
      (response) => {
        if (response) {// Clear any previous error message
          alert('User deleted successfully');
        } else {
          alert('An error occurred while processing the request.');
        }
      },
      (error) => {
        alert('An error occurred while processing the request.');
      }
    );
    this.getuser();
  }
  createUser(){

    const id:number=Math.max(...this.listOfUser.map(user => user.id))+1;
    const user:IUser={id:id,name:this.userName,email:this.emailId};
    this.demoService.createUser(user).subscribe(
      (response) => {
        alert('User created successfully:');
      },
      (error) => {
        alert('Error creating user:');
      }
    );
    this.getuser();
  }
  updateUser(id: number, updatedName: string, updatedEmail: string) {
    // Create the updated user object
    const updatedUser: IUser = { id, name: updatedName, email: updatedEmail };

    // Call the service to update the user via HTTP PUT request
    this.demoService.updateUser(updatedUser).subscribe(
      response => {
        alert('User updated successfully:');
      },
      error => {
        alert('Error updating user.');
      }
    );
    this.getuser();
    console.log(this.listOfUser);
  }
}
