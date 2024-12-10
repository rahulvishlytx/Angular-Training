import { Component } from '@angular/core';
import { User } from '../models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: false,
  
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  user : User = new User();

  onSubmit(userForm : NgForm) {
    console.log(userForm);
    
  }

}
