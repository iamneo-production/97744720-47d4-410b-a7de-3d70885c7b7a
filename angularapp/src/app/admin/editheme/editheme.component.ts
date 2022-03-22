import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private themeService: ThemeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.themeService.getThemeById(this.id).subscribe(data => {
      this.theme = data;
     (error:any) => console.log(error)});
  }
  

  onSubmit(){
    this.themeService.updateTheme(this.id, this.theme).subscribe( data =>{
      this.goToThemeList();
      alert("Theme updated Successfully");
      (error:any) => console.log(error)});
  }

  goToThemeList(){
    this.router.navigate(['/admin/viewtheme']);
  }}
