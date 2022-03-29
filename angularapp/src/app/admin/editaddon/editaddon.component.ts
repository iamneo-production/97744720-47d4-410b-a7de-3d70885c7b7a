import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Addon } from 'src/app/addon';
import { AddonService } from 'src/app/addon.service';

@Component({
  selector: 'app-editaddon',
  templateUrl: './editaddon.component.html',
  styleUrls: ['./editaddon.component.css']
})
export class EditaddonComponent implements OnInit {
  constructor(private route:ActivatedRoute,private router:Router,private addonservice:AddonService) { }
  id!:number;
  addon=new Addon();
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.addonservice.getAddonById(this.id).subscribe(
      data=>{
        this.addon=data;
        (error:any)=>console.log(error)});
      }
      onSubmit(){
        this.addonservice.editAddon(this.id,this.addon).subscribe(
          data=>{
            alert("Addon Updated SuccessFully");
            this.router.navigate(['/admin/viewaddon']);
            (error:any)=>console.log(error)});
          }
  }


