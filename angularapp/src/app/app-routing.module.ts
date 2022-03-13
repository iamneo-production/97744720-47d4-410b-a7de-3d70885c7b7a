import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { AddmenuComponent } from './admin/addMenu/addmenu.component';
import { FoodmenuComponent } from './admin/getMenu/foodmenu.component';
import { EditMenuComponent } from './admin/editMenu/edit-menu.component';
const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'user/home',component:HomeComponent},
  {path:'admin/homepage',component:HomepageComponent},
  {path:'admin/getMenu',component:FoodmenuComponent},
  {path:'admin/addMenu',component:AddmenuComponent},
  {path:'admin/editMenu/:foodMenuID',component:EditMenuComponent},
  { path: '', redirectTo: '/login' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }