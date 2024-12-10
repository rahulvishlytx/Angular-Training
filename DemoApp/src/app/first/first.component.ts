import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

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

  listOfUser : any

  
  
  constructor(private demoService: DemoService) {

  }





  ngOnInit(): void {
    // this.demoService.getValues().subscribe(data => {
    //   this.listOfUser = data;
    // })

    // this.demoService.getValuesFromApi().subscribe(data => {
    //   this.listOfUser = data;
    // })
  }

  onClick() {
    console.log('Button clicked');
  }
  setClass() {
    return this.activeUsers >= 10 ? 'primary' : 'secondary';
  }
}
