import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import { HttpClientModule } from '@angular/common/http'; // Fix: Import HttpClientModule here
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, FormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Ensure HttpClientModule is imported here
  ],
  providers: [DemoService], // No need for provideHttpClient if you're not using an interceptor setup
  bootstrap: [AppComponent],
})
export class AppModule {}
