import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Theme } from '../theme';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-deletetheme',
  templateUrl: './deletetheme.component.html',
  styleUrls: ['./deletetheme.component.css']
})
export class DeletethemeComponent implements OnInit {
  id!: number;
  theme: Theme = new Theme();
  themes!:Theme[];
  constructor(private themeService: ThemeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.themeService.getThemeById(this.id).subscribe(data => {
      this.theme = data;
     (error:any) => console.log(error)});
    this.getthemes();
  }
  private getthemes(){
    this.themeService.getThemeList().subscribe(data => {
      this.themes=data;
    });
  }
  onSubmit(){
    this.themeService.deleteTheme(this.id).subscribe( data =>{
      (error:any) => console.log(error)});
    }
  deleteTheme(id: number){
    this.themeService.deleteTheme(id).subscribe( data => {
      console.log(data);
      this.goToThemeList();
      alert("Your item deleted Sucessfully");
    })
  }
  goToThemeList(){
    this.router.navigate(['/admin/viewtheme']);
  }

}
