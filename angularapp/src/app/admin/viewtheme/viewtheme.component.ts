import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedMenuAndItemService } from '../../shared.service';
import { Theme } from '../../theme';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-viewtheme',
  templateUrl: './viewtheme.component.html',
  styleUrls: ['./viewtheme.component.css']
})
export class ViewthemeComponent implements OnInit {
  themes!: Theme[];
  constructor(private themeService: ThemeService,
    private router:Router,private share:SharedMenuAndItemService) { }

  ngOnInit(): void {
    this.getthemes();
    this.share.setStatus([1,0,0]);
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
}
