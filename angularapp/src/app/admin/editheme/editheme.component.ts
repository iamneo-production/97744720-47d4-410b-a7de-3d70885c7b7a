import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedthemeService } from '../../sharedtheme.service';
import { Theme } from '../../theme';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-editheme',
  templateUrl: './editheme.component.html',
  styleUrls: ['./editheme.component.css']
})
export class EdithemeComponent implements OnInit {
  id!: number;
  theme: Theme = new Theme();
  itemdetails:any=null;
  constructor(private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router,private addthemeservice:ThemeService,
    private share:SharedthemeService) {
      this.addthemeservice.getThemeList().subscribe(data => {
        this.itemdetails = data;
        this.share.setItem(this.itemdetails);
      });
     }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.themeService.getThemeById(this.id).subscribe(data => {
      this.theme = data;
      console.log(this.theme);
     (error:any) => console.log(error)});
  }
  

  onSubmit(){
    if(this.share.checkstatus(this.theme,this.itemdetails))
      {
       alert("The Item is already exist");
      }
      else
      {
        this.themeService.updateTheme(this.id, this.theme).subscribe( data =>{
          this.goToThemeList();
          (error:any) => console.log(error)});
      }
    
  }

  goToThemeList(){
    this.router.navigate(['/admin/viewtheme']);
  }}
