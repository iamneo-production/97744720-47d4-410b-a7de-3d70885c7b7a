import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Theme } from '../theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent implements OnInit {
  theme: Theme = new Theme();
  themes!:Theme[];
  constructor(private themeService: ThemeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getthemes();
  }
  private getthemes(){
    this.themeService.getThemeList().subscribe(data => {
      this.themes=data;
    });
  }
  deleteTheme(id: number){
    this.themeService.deleteTheme(id).subscribe( data => {
      console.log(data);
      this.getthemes();
      alert("Your item deleted Sucessfully");
    })
  }

}
