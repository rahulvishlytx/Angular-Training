import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { FormsModule } from '@angular/forms';
import { DemoService } from './services/demo.service';
import { HttpClientModule } from '@angular/common/http';
import { CustomModule } from './custom/custom.module';
@NgModule({
  declarations: [AppComponent, FirstComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CustomModule],
  providers: [DemoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
