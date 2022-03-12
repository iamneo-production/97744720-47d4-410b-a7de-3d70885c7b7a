import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddmenuService } from 'src/app/addmenu.service';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  itemdetails: any = null;
  itm:any=null;
  setitmname(item:any)
  {
    this.itm=item.foodMenuItems;
    this.share.setObj(item);
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
    this.router.navigate(['admin/edit-menu',itemobject.foodMenuID]);
  }
  ngOnInit(): void {
    this.getitemDetails();
  }

}

