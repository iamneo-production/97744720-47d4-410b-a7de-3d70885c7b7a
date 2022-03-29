import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmenuService } from 'src/app/common.service';
import { SharedMenuAndItemService } from 'src/app/shared.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-getmenu',
  templateUrl: './getmenu.component.html',
  styleUrls: ['./getmenu.component.css']
})
export class GetmenuComponent implements OnInit {

  itemdetails: any = null;
  itm:any=null;
  p:number=1;
  setitmname(item:any)
  {
    this.itm=item.foodMenuItems;
    this.share.setObj(item);
    this.router.navigate(['admin/deleteMenu',item.foodMenuID]);
  }
  itemtoupdate=
  {
    foodMenuImage:"",
    foodMenuItems:"",
    foodMenuType:"",
    foodMenuCost:""
  }
  constructor(private share: SharedMenuAndItemService, private addmenuservice: AddmenuService,private router:Router,private route:ActivatedRoute) {
  }
  getitemDetails() {
    this.addmenuservice.getItems().subscribe(
      (resp) => {
        console.log(resp);
        this.itemdetails = resp;
        this.share.setItem(this.itemdetails);
      },
      (err) => {
        console.log(err);
      }
    )
  }
  deleteItem() {
    this.addmenuservice.deleteItem(this.share.getObj().foodMenuID).subscribe(
      (resp) => {
        this.getitemDetails();
        alert("Your item delted Sucessfully");
      },
     (err) => console.log(err)
    );
  }
  edititem(itemobject:any)
  {
    this.share.setObj(itemobject);
    this.getitemDetails();
    this.router.navigate(['admin/editMenu',itemobject.foodMenuID]);
  }
  ngOnInit(): void {
    this.getitemDetails();
    this.share.setStatus([0,1,0]);
  }
  key:string='foodMenuItems';
  rev:boolean=false;
  sort(key)
  {
    this.key=key;
    this.rev=!this.rev;
  }
}
