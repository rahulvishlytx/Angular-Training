import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-route2',
  standalone: false,
  
  templateUrl: './route2.component.html',
  styleUrl: './route2.component.css'
})
export class Route2Component {
  constructor(private router : Router) { }

  goHome(){
    this.router.navigate(['home']);
  }
}
