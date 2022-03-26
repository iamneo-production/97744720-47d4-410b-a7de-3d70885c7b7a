import { Component, OnInit } from '@angular/core';
import { Addon } from 'src/app/addon';
import { AddonService } from 'src/app/addon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addaddon',
  templateUrl: './addaddon.component.html',
  styleUrls: ['./addaddon.component.css']
})
export class AddaddonComponent implements OnInit {

  addon=new Addon();
  constructor(private router:Router, private addonservice:AddonService) { }

  ngOnInit(): void {
  }
  saveAddon(){
    this.addonservice.addAddon(this.addon).subscribe(data=>{
      this.router.navigate(['/admin/viewaddon'])
      console.log(data);
      alert("Your item Added Sucessfully");
      (error: any)=>console.log(error);
    });
  }
  onSubmit(){
    console.log(this.addon);
    this.saveAddon();
  }
}

