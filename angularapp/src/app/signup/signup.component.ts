import { isNull, variable } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { ConfirmValidation } from './confirm-validation';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup =new FormGroup({
    selectCategory:new FormControl(''),
    email:new FormControl(''),
    userName:new FormControl(''),
    mobileNumber:new FormControl(''),
    password:new FormControl(''),
    confirmPassword:new FormControl(''),
    
  })
  constructor(private router:Router ,private formBuilder: FormBuilder,private service:RegisterService) {
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
    this.signupForm = this.formBuilder.group({
      selectCategory:
    [
      '',
      [Validators.required]
    ],
      email: [
        '', 
        [Validators.required, 
         Validators.email
        ]
      ],
      userName: [
        '', 
        [Validators.required]
      ],
      mobileNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40)
        ]
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
        ]
      ]
    },
    {
      validators:[ConfirmValidation. match('password', 'confirmPassword')]
    }
     
    )
  }
    
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }
  onSubmit(): void {
    this.user.email=this.signupForm.get('email')?.value;
    this.user.selectCategory=this.signupForm.get('selectCategory')?.value;
    this.user.userName=this.signupForm.get('userName')?.value;
    this.user.mobileNumber=this.signupForm.get('mobileNumber')?.value;
    this.user.password=this.signupForm.get('password')?.value;
    (error: any)=>console.log(error);
   this.service.signUp(this.user).subscribe(
     data=>{
       console.log("Success");
       this.router.navigate(['/login']);
       alert("Register SuccessFully");
       (error: any)=>console.log(error);
     },
    error=>{
      
     alert("User with " +this.user.email+" is already Exist")
     }
   );
    this.submitted = true;
    if (this.signupForm.invalid) {
      return;
    }
    console.log(JSON.stringify(this.signupForm.value, null, 2));
}
}
