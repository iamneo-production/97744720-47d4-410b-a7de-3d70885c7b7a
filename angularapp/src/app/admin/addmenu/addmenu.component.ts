import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm,Validators,FormBuilder } from '@angular/forms';
import { AddmenuService } from 'src/app/addmenu.service';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';


@Component({
  selector: 'app-addmenu',
  templateUrl: './addmenu.component.html',
  styleUrls: ['./addmenu.component.css']
})
export class AddmenuComponent implements OnInit {
  itemdetails:any=null;
  pattern:any;
  pattern1:any;
  itmcat=this.share.getItmcat();
  changeitemcategory(e:any)
  {
    console.log(e.target.value);
    this.additemform.get('foodMenuType').setValue(e.target.value,
      {
        onlySelf:true,
      });
  }
  constructor(private addmenuservice:AddmenuService,private share:SharedMenuAndItemService){
    this.itemdetails=this.share.getItem();
  }
  addItem(additemform: any)
  {
  this.addmenuservice.addItem(this.additemform.value).subscribe(
    (resp)=>
    {
      alert("Your item Added Sucessfully");
      window.location.reload();
    },
    (err)=>
    {
      console.log(err);
    }
  );
  }
  submitForm(x:any) 
 {
      if(this.additemform.valid)
      {
       this.addItem(x);
      }
      else
      {
       alert("please enter all fields");
      }
 }
  additemform:any=FormGroup;
  ngOnInit(): void {
    this.pattern="^([a-zA-Z]+\_?[0-9]*)*$";
    this.pattern1='^[0-9]+';
    this.additemform=new FormGroup(
      {
        'foodMenuImage':new FormControl('',Validators.required),
        'foodMenuItems':new FormControl(null,[Validators.required,Validators.pattern(this.pattern)]),
        'foodMenuType':new FormControl(null,Validators.required),
        'foodMenuCost':new FormControl(null,[Validators.required,Validators.pattern(this.pattern1)])
      },{updateOn:'change'}
    );
  }
}
