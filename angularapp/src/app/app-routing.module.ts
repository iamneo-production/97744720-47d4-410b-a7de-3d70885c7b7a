
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AdthemeComponent } from './admin/addtheme/addtheme.component';
import { DeletemenuComponent } from './admin/deletemenu/deletemenu.component';
import { GetmenuComponent } from './admin/getmenu/getmenu.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';
import { Component, NgModule } from '@angular/core';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { EdithemeComponent } from './admin/editheme/editheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddaddonComponent } from './admin/addaddon/addaddon.component';
import { DeleteaddonComponent } from './admin/deleteaddon/deleteaddon.component';
import { EditaddonComponent } from './admin/editaddon/editaddon.component';
import { ViewaddonComponent } from './admin/viewaddon/viewaddon.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
const routes: Routes = [
  {path:'user/home',component:HomeComponent},
  {path:'admin/homepage',component:HomepageComponent},
  {path:'admin/getMenu',component:GetmenuComponent},
  {path: 'admin/addtheme',component:AdthemeComponent},
  {path:'admin/editMenu/:foodMenuID',component:EditmenuComponent},
  {path:'admin/deleteMenu/:foodMenuID',component:DeletemenuComponent},
  {path:'admin/addMenu',component:AddmenuComponent},
  {path: 'admin/addtheme',component:AdthemeComponent},
  {path: 'admin/deletetheme/:id',component:DeletethemeComponent},
  {path: 'admin/viewtheme',component:ViewthemeComponent},
  {path:'admin/edittheme/:id',component:EdithemeComponent},
  {path:'admin/addaddon',component:AddaddonComponent},
  {path:'admin/deleteaddon/:id',component:DeleteaddonComponent},
  {path:'admin/editaddon/:id',component:EditaddonComponent},
  {path:'admin/viewaddon',component:ViewaddonComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  { path: '', redirectTo: '/login' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
