import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedthemeService } from '../../sharedtheme.service';
import { Theme } from '../../theme';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-adtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AdthemeComponent implements OnInit {
  itemdetails:any=null;
  status:any=null;
  pattern:any;
  pattern1:any;
  themes!: Theme[];
  constructor(private router:Router,private addthemeservice:ThemeService,private share:SharedthemeService){
    this.addthemeservice.getThemeList().subscribe(data => {
      this.itemdetails = data;
      this.share.setItem(this.itemdetails);
    });
    
  }
  addItem(additemform: any)
  {
  this.addthemeservice.createTheme(this.additemform.value).subscribe(
    (resp)=>
    {
      alert("Your Theme Added Sucessfully");
      window.location.reload();
    },

    (err)=>
    {console.log(err);}
  );
  }
  submitForm(x:any) 
 {
      if(this.additemform.valid)
      {
        
        if(this.share.checkstatus(this.additemform.value,this.itemdetails))
      {
       alert("The Item is already exist");
      }
      else
      {
        this.goToThemeList();
        this.addItem(x);
      }
      }
      else
      {
       alert("please enter all fields");
      }
 }
  goToThemeList() {
    this.router.navigate(['/admin/viewtheme']);
  }

  additemform:any=FormGroup;
  ngOnInit(): void {
    
    
    this.additemform=new FormGroup(
      {
        'themeImageURL':new FormControl('',Validators.required),
        'themeReturnGift':new FormControl('',Validators.required),
        'themeName':new FormControl(null,Validators.required),
        'themeVideographer':new FormControl(null,Validators.required),
        'themePhotographer':new FormControl(null,Validators.required),
        'themeCost':new FormControl(null,Validators.required),
        'themeDescription':new FormControl(null,Validators.required),
        
      },{updateOn:'change'}
    );
  }
}