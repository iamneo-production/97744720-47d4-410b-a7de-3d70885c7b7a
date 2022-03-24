import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ThemeService } from '../../theme.service';
import { Theme } from '../../theme';

@Component({
  selector: 'app-addtheme',
  templateUrl: './addtheme.component.html',
  styleUrls: ['./addtheme.component.css']
})
export class AddthemeComponent implements OnInit {
  theme: Theme = new Theme();
  constructor(private router:Router, private themeservice: ThemeService) { }

  ngOnInit(): void {
  }
  saveTheme(){
    this.themeservice.createTheme(this.theme).subscribe(data=>{
      console.log(data);
      this.goToThemeList();
      alert("Your item Added Sucessfully");
      (error: any)=>console.log(error);
    });
  }
  keyPressNumbers(event:any) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
  goToThemeList(){
    this.router.navigate(['/admin/viewtheme']);
  }
  onSubmit(){
    console.log(this.theme);
    this.saveTheme();
  }
}
