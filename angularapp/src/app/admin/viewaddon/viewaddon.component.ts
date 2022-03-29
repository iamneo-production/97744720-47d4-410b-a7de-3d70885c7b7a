import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from 'src/app/addon';
import { AddonService } from 'src/app/addon.service';
import { SharedMenuAndItemService } from 'src/app/shared.service';

@Component({
  selector: 'app-viewaddon',
  templateUrl: './viewaddon.component.html',
  styleUrls: ['./viewaddon.component.css']
})
export class ViewaddonComponent implements OnInit {

  addondetails!:Addon[];

  constructor(private router:Router,private addonservice:AddonService,private share: SharedMenuAndItemService) { 
   
}
addon=new Addon();
  ngOnInit(): void {
    this.viewAddon();
    this.share.setStatus([0,0,1]);
  }
  viewAddon(){
    this.addonservice.getAddon().subscribe(
      data=>{
       this.addondetails=data;
       console.log("Success");
      }
    );
  }
  editAddon(id: number){
    this.router.navigate(['/admin/editaddon', id]);
  }
  deleteAddon(id: number){
    this.router.navigate(['/admin/deleteaddon', id]);
  }

}

