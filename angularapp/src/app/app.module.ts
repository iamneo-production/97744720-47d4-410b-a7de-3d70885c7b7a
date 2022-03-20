import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { AddthemeComponent } from './addtheme/addtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { EdithemeComponent } from './editheme/editheme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,

    AddthemeComponent,
    DeletethemeComponent,
    ViewthemeComponent,
    EdithemeComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
