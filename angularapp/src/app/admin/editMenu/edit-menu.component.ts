import { Component, OnInit } from '@angular/core';
import {NgControl, NgForm,FormBuilder,ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddmenuService } from 'src/app/addmenu.service';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';

@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {
  foodMenuID!:number;
  updateform:any=NgForm;
  selectedvalue:any;
  constructor(private share:SharedMenuAndItemService,private addmenuservice: AddmenuService,private route:ActivatedRoute) {
   }
   changeitemcategory(e:any)
  {
    this.itemtoupdate.foodMenuType=e.target.value;
    this.selectedvalue=e.target.value;
  }
   itmcat=this.share.getItmcat();
  ngOnInit(): void {
    this.foodMenuID=this.route.snapshot.params['foodMenuID'];
    this.addmenuservice.getitembyid(this.foodMenuID).subscribe(
      (resp:any)=>
      {
        this.selectedvalue=resp.foodMenuType;
        this.itemtoupdate=resp;
      },
      (err)=>
      {
        console.log(err);
      }
    );
  }
  updateItem()
  {
    this.addmenuservice.updateItem(this.itemtoupdate).subscribe(
      (resp)=>
      {
        console.log(resp);
        alert("Your Item Updated Successfully");
        window.location.reload();
      },
      (err)=>
      {
        console.log(err);
      }
    );
  }
  itemtoupdate=
  {
    foodMenuImage:"",
    foodMenuItems:"",
    foodMenuType:"",
    foodMenuCost:""
  }
 }

