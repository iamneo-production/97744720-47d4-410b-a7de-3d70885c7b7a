import { Component, OnInit } from '@angular/core';
import { AddmenuService } from 'src/app/addmenu.service';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';

@Component({
  selector: 'app-foodmenu',
  templateUrl: './foodmenu.component.html',
  styleUrls: ['./foodmenu.component.css']
})
export class FoodmenuComponent implements OnInit {
  itemdetails: any = null;
  itemtoupdate=
  {
    itemimage:"",
    itemname:"",
    itemcategory:"",
    price:""
  }
  constructor(private share: SharedMenuAndItemService, private addmenuservice: AddmenuService) {
    this.getitemDetails();
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
  deleteItem(item:any) {
    this.addmenuservice.deleteItem(item.sno).subscribe(
      (resp) => {
        console.log(resp);
        this.getitemDetails();
        alert("Your item delted Sucessfully");
      },
     (err) => console.log(err)
    );
  }
  edititem(itemobject:any)
  {
    this.itemtoupdate=itemobject;
    this.getitemDetails();
  }
  updateItem()
  {
    this.addmenuservice.updateItem(this.itemtoupdate).subscribe(
      (resp)=>
      {
        this.getitemDetails();
        alert("Your item updated Sucessfully");
        console.log(resp);
      },
      (err)=>
      {
        this.getitemDetails();
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
  }

}

