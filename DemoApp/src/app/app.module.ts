import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
