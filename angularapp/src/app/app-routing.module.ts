import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdthemeComponent } from './admin/addtheme/addtheme.component';
import { DeletethemeComponent } from './admin/deletetheme/deletetheme.component';
import { EdithemeComponent } from './admin/editheme/editheme.component';
import { ViewthemeComponent } from './admin/viewtheme/viewtheme.component';



const routes: Routes = [
  {path: 'admin/addtheme',component:AdthemeComponent},
  {path: 'admin/deletetheme/:id',component:DeletethemeComponent},
  {path: 'admin/viewtheme',component:ViewthemeComponent},
  {path:'admin/edittheme/:id',component:EdithemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
