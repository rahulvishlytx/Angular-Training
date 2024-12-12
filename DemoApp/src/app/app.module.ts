import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { UserComponent } from './user/user.component';
import { UserService } from './services/userService/user.service';
import { ResponsiveformComponent } from './responsiveform/responsiveform.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, FormComponent, UserComponent, ResponsiveformComponent, AddUserComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule ,ReactiveFormsModule ],
  providers: [DemoService, UserService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
