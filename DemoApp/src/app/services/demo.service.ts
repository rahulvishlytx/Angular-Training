import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService{

  constructor() { }
  getValues(): string[] {
    throw new Error('Method not implemented.');
  }
}
