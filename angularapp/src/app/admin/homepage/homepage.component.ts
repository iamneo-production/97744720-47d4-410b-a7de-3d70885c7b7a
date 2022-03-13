import { Component, OnInit } from '@angular/core';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';
import {NgControl, NgForm,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  itemdetails:any=null;
  status: Array<number> = [0,0,0]; 
  getitems()
  {
    this.itemdetails=this.share.getItem();
  }
  constructor(private share:SharedMenuAndItemService) { }

  ngOnInit(): void {
    this.status=this.share.getStatus();
    console.log("called");
    console.log(this.status[1]);
  }

}
