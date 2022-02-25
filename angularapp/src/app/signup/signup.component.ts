import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormBuilder, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup =new FormGroup({
    email:new FormControl(''),
    userName:new FormControl(''),
    mobileNumber:new FormControl(''),
    password:new FormControl(''),
    Confirmpassword:new FormControl('')
    })
    title = 'validation';
    constructor(private formBuilder: FormBuilder) {}
    submitted = false;
    ngOnInit(): void {
      this.signupForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        userName: ['', Validators.required],
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
        Confirmpassword: [
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
      return this.signupForm.controls;
    }
    onSubmit(): void {
      this.submitted = true;
      if (this.signupForm.invalid) {
        return;
      }
      console.log(JSON.stringify(this.signupForm.value, null, 2));
  }

}