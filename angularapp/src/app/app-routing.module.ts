import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddthemeComponent } from './addtheme/addtheme.component';
import { DeletethemeComponent } from './deletetheme/deletetheme.component';
import { EdithemeComponent } from './editheme/editheme.component';
import { ViewthemeComponent } from './viewtheme/viewtheme.component';


const routes: Routes = [
  {path: 'admin/addtheme',component:AddthemeComponent},
  {path: 'admin/deletetheme/:id',component:DeletethemeComponent},
  {path: 'admin/viewtheme',component:ViewthemeComponent},
  {path:'admin/edittheme/:id',component:EdithemeComponent},
  { path: '', redirectTo: 'admin/addtheme' ,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
