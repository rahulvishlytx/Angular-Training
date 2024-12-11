import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './custom/home/home/home.component';
import { Route1Component } from './custom/route1/route1/route1.component';
import { Route2Component } from './custom/route2/route2/route2.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'route1',
    component: Route1Component
  },
  {
    path: 'route2',
    component: Route2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
