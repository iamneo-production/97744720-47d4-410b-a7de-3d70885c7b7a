import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Addon } from 'src/app/addon';
import { AddonService } from 'src/app/addon.service';

@Component({
  selector: 'app-viewaddon',
  templateUrl: './viewaddon.component.html',
  styleUrls: ['./viewaddon.component.css']
})
export class ViewaddonComponent implements OnInit {

  addondetails!:Addon[];

  constructor(private router:Router,private addonservice:AddonService) { 
   
}
addon=new Addon();
  ngOnInit(): void {
    this.viewAddon();
   
    
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

