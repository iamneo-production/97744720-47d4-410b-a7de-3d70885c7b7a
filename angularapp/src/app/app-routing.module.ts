import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AddmenuComponent } from './admin/addmenu/addmenu.component';
import { DeletemenuComponent } from './admin/deletemenu/deletemenu.component';
import { GetmenuComponent } from './admin/getmenu/getmenu.component';
import { EditmenuComponent } from './admin/editmenu/editmenu.component';
const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user/home',component:HomeComponent},
  {path:'admin/homepage',component:HomepageComponent},
  {path:'admin/getMenu',component:GetmenuComponent},
  {path:'admin/addMenu',component:AddmenuComponent},
  {path:'admin/editMenu/:foodMenuID',component:EditmenuComponent},
  {path:'admin/deleteMenu/:foodMenuID',component:DeletemenuComponent},
  { path: '', redirectTo: '/login' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }