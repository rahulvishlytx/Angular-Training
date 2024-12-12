import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { ResponsiveformComponent } from './responsiveform/responsiveform.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, 
  { path: 'home', component: FirstComponent },
  { path: 'user', component: UserComponent },
  { path: 'responsiveform', component: ResponsiveformComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '**', redirectTo: 'home' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

