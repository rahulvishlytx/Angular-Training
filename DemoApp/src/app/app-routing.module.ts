import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoService } from './services/demo.service';

const routes: Routes = [
  { path: 'users', component: DemoService }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
