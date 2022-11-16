import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import ValidateForm from "src/app/helpers/ValidateForm";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  signUpForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"; 
    this.isText ? this.type = "text" : this.type = "password";  
  }

  onSignup(){
    if(this.signUpForm.valid) {
      //perform login for signup
      console.log(this.signUpForm.value);
        
    } else {
       //logic for throwing error
       ValidateForm.validateAllFormFields(this.signUpForm)
    }
  }

}
