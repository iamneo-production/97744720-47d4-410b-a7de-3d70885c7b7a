import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    password:new FormControl(''),
  })
  title = 'validation';
  constructor(private router:Router,private formBuilder: FormBuilder,private service:RegisterService) {
    this.user={
    selectCategory:'',
    email:'',
    userName:'',
    mobileNumber:'',
    password:'',

    }
  }
  user=new User();
  submitted = false;
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [
        '', 
        [Validators.required, 
         Validators.email
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ]
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
  onSubmit(): void {
   this.user.email=this.loginForm.get('email')?.value,
   this.user.password=this.loginForm.get('password')?.value
    this.service.login(this.user).subscribe(
      data=>{
        console.log("Success");
        if(data["selectCategory"]=="User"){
          this.router.navigate(['/user/home']);
        }
        else{
          this.router.navigate(['/admin/homepage']);
        }  
    },
    error=>{
      alert("Invalid Email and Password")
    }

    )
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.loginForm.value, null, 2));
}
}
