import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { GetmenuComponent } from './admin/getmenu/getmenu.component';
import { DeletemenuComponent } from './admin/deletemenu/deletemenu.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    GetmenuComponent,
    AddmenuComponent,
    DeletemenuComponent,
    EditmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  exports:
  [
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 }