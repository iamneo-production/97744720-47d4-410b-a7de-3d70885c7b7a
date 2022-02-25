import { Component, OnInit } from '@angular/core';
import { SharedMenuAndItemService } from 'src/app/shared-menu-and-item.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  itemdetails:any=null;
  getitems()
  {
    this.itemdetails=this.share.getItem();
  }
  constructor(private share:SharedMenuAndItemService) { }

  ngOnInit(): void {
    
  }

}
