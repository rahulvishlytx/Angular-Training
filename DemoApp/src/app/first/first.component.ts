import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  standalone: false,

  templateUrl: './first.component.html',
  styleUrl: './first.component.css',
})
export class FirstComponent implements OnInit {
  componentName: string = 'FirstComponent';

  twoBinding: string = 'Enter the name';

  srcUrl: string = 'https://angular.io/assets/images/logos/angular/angular.svg';

  isActive: boolean = false;

  activeUsers: number = 1;

  cssClass: string = 'primary';
  cssClasses: string[] = ['primary', 'primaryextended'];

  listOfUser = [
    { name: 'John', isActive: true },
    { name: 'Joe', isActive: true },
    { name: 'Mike', isActive: false },
    { name: 'Essan', isActive: true },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log('FirstComponent initialized');
  }

  onClick() {
    console.log('Button clicked');
  }
  setClass() {
    return this.activeUsers >= 10 ? 'primary' : 'secondary';
  }
}
