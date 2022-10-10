import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import {UserComponent} from './user details/user.component';
import {SummaryComponent} from './summary/summary.component';
import {ProductComponent} from './products/products.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,UserComponent,SummaryComponent,ProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
