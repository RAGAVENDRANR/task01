import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchdataPipe } from './searchdata.pipe';

import { OrderModule } from 'ngx-order-pipe';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { NopageComponent } from './nopage/nopage.component';
import { RoutepageComponent } from './routepage/routepage.component';

import {MatSliderModule}from '@angular/material/slider';
import {MatSlideToggleModule}from "@angular/material/slide-toggle"
// import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    SearchdataPipe,
    Child1Component,
    Child2Component,
    NopageComponent,
    RoutepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    MatSliderModule,
    MatSlideToggleModule,
    // ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
