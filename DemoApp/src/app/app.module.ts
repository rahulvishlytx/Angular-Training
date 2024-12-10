import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import { HttpClientModule, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { SecondcComponent } from './secondc/secondc.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, FormComponent, SecondcComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule ],
  providers: [DemoService, provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [AppComponent],
})
export class AppModule {}
