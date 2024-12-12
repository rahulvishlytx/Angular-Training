import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm : FormGroup

  showDate = new Date();

  showThis = of('Hello World');

  constructor(private formBuilder : FormBuilder){
    this.userForm = this.formBuilder.group({
      name : ['', [Validators.minLength(3), Validators.required]],
      email : ['', [Validators.email, Validators.required]],
      password : ['', [Validators.minLength(6), Validators.required]]
    })
   
  }


  onSubmit(form: FormGroup)  {
    console.log(form.value);
    
  }

}
