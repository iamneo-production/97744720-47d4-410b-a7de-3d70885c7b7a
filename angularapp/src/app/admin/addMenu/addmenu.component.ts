import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators } from '@angular/forms';
import { AddmenuService } from 'src/app/addmenu.service';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';


@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  itemdetails:any=null;
  constructor(private addmenuservice:AddmenuService,private share:SharedMenuAndItemService){
    this.itemdetails=this.share.getItem();
  }
  addItem(additemform: NgForm)
  {
  this.addmenuservice.addItem(additemform.value).subscribe(
    (resp)=>
    {
      console.log(resp);
      additemform.reset();
      alert("Your item Added Sucessfully");
    },
    (err)=>
    {
      console.log(err);
    }
  );
  }
  additemform:any=FormGroup;
  ngOnInit(): void {
    this.additemform=new FormGroup(
      {
        'itemimage':new FormControl(null,Validators.required),
        'itemname':new FormControl(null,Validators.required),
        'itemcategory':new FormControl(null,Validators.required),
        'price':new FormControl(null,Validators.required)
      }
    );
  }
}
