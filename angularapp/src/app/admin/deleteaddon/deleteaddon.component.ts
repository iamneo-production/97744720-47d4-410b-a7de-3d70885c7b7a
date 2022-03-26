import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addon } from 'src/app/addon';
import { AddonService } from 'src/app/addon.service';

@Component({
  selector: 'app-deleteaddon',
  templateUrl: './deleteaddon.component.html',
  styleUrls: ['./deleteaddon.component.css']
})
export class DeleteaddonComponent implements OnInit {
  id!:number;
 
  item!:Addon[];
  constructor(private addonservice:AddonService,private route:ActivatedRoute,private router:Router) { }
  addon=new Addon();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
   this.addonservice.getAddonById(this.id).subscribe(
     data=>{
       this.addon=data;
       (error:any)=>console.log(error)});
       
   }
   private viewAddon(){
     this.addonservice.getAddon().subscribe(data=>{
       this.item=data;
     });
   }
   private getAddons(){
     this.addonservice.getAddon().subscribe(data=>{
       this.item=data;
     })
   }
   onSubmit(){
     this.addonservice.deleteAddon(this.id).subscribe(
       data=>{
         (error:any)=>console.log(error);
       }
     );
   }
   deleteAddon(id:number){
     this.addonservice.deleteAddon(this.id).subscribe(
       data=>{
        alert("Deleted Successfully");
         this.router.navigate(['/admin/viewaddon']);
        
         (error:any)=>console.log(error)})
       }

       goToViewAddon(){
        this.router.navigate(['/admin/viewaddon']);
       }
   

}

