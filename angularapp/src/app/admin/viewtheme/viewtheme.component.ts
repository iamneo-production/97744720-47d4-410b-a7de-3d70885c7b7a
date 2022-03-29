import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedMenuAndItemService } from 'src/app/shared.service';
import { SharedthemeService } from '../../sharedtheme.service';
import { Theme } from '../../theme';
import { ThemeService } from '../../theme.service';
@Component({
  selector: 'app-viewtheme',
  templateUrl: './viewtheme.component.html',
  styleUrls: ['./viewtheme.component.css']
})
export class ViewthemeComponent implements OnInit {
  themes!: Theme[];
  p:number=1;
  constructor(private themeService: ThemeService, private share:SharedthemeService,private shares: SharedMenuAndItemService,
    private router:Router) { }
  ngOnInit(): void {
    this.getthemes();
    this.shares.setStatus([1,0,0]);
  }
  private getthemes(){
    this.themeService.getThemeList().subscribe(data => {
      this.themes=data;
    });
  }
  updateTheme(id: number){
    this.router.navigate(['/admin/edittheme', id]);
  }
  deleteTheme(id: number){
    this.router.navigate(['/admin/deletetheme', id]);
  }
  key:string='themeName';
  rev:boolean=false;
  sort(key)
  {
    this.key=key;
    this.rev=!this.rev;
  }
}
