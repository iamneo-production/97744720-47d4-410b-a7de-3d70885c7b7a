import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxPaginationModule } from 'ngx-pagination';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { EdithemeComponent } from './admin/editheme/editheme.component';
import { AdthemeComponent } from './admin/addtheme/addtheme.component';
import { Ng2OrderModule } from 'ng2-order-pipe';



@NgModule({
  declarations: [
    AppComponent,
    DeletethemeComponent,
    ViewthemeComponent,
    EdithemeComponent,
    AdthemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
