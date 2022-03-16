import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddmenuService } from 'src/app/common.service';
import { SharedMenuAndItemService } from 'src/app/shared.service';

@Component({
  selector: 'app-editmenu',
  templateUrl: './editmenu.component.html',
  styleUrls: ['./editmenu.component.css']
})
export class EditmenuComponent implements OnInit {

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
