import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { EdicionComponent } from './edicion/edicion.component';
import {  HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule, } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    EdicionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
