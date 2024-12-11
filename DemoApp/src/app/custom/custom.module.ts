import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Route1Component } from './route1/route1/route1.component';
import { Route2Component } from './route2/route2/route2.component';
import { AppRoutingModule } from '../app-routing.module';
import { ReversePipe } from './pipe/reverse.pipe';



@NgModule({
  declarations: [
    HomeComponent,
    Route1Component,
    Route2Component,
    ReversePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class CustomModule { }
