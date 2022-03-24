import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { DeletemenuComponent } from './admin/deletemenu/deletemenu.component';
import { GetmenuComponent } from './admin/getmenu/getmenu.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';
import { Component, NgModule } from '@angular/core';
import { AddthemeComponent } from './admin/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { EdithemeComponent } from './admin/editheme/editheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
const routes: Routes = [
  {path:'user/home',component:HomeComponent},
  {path:'admin/homepage',component:HomepageComponent},
  {path:'admin/getMenu',component:GetmenuComponent},
  {path:'admin/addMenu',component:AddmenuComponent},
  {path:'admin/editMenu/:foodMenuID',component:EditmenuComponent},
  {path:'admin/deleteMenu/:foodMenuID',component:DeletemenuComponent},
  {path: 'admin/addtheme',component:AddthemeComponent},
  {path: 'admin/deletetheme/:id',component:DeletethemeComponent},
  {path: 'admin/viewtheme',component:ViewthemeComponent},
  {path:'admin/edittheme/:id',component:EdithemeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: '', redirectTo: '/login' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
