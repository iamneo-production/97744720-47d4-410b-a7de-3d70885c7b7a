import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

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
import { AdthemeComponent } from './admin/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { EdithemeComponent } from './admin/editheme/editheme.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddaddonComponent } from './admin/addaddon/addaddon.component';
import { DeleteaddonComponent } from './admin/deleteaddon/deleteaddon.component';
import { EditaddonComponent } from './admin/editaddon/editaddon.component';
import { ViewaddonComponent } from './admin/viewaddon/viewaddon.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2OrderModule } from 'ng2-order-pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GetmenuComponent,
    AddmenuComponent,
    DeletemenuComponent,
    EditmenuComponent,
    AdthemeComponent,
    DeletethemeComponent,
    ViewthemeComponent,
    EdithemeComponent,
    LoginComponent,
    SignupComponent,
    AddaddonComponent,
    DeleteaddonComponent,
    EditaddonComponent,
    ViewaddonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule,
    NgxPaginationModule,
    Ng2OrderModule
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
