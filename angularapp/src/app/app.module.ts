import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { GetmenuComponent } from './admin/getmenu/getmenu.component';
import { DeletemenuComponent } from './admin/deletemenu/deletemenu.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';
import { AddthemeComponent } from './addtheme/addtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';
import { EdithemeComponent } from './editheme/editheme.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GetmenuComponent,
    AddmenuComponent,
    DeletemenuComponent,
    EditmenuComponent,
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