import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';
import ValidateForm from "src/app/helpers/ValidateForm";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string = "password";
  isText: boolean = false;
  eyeIcon: string = 'fa-eye-slash';
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required]
    })
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText ? this.eyeIcon = "fa-eye" : this.eyeIcon = "fa-eye-slash"; 
    this.isText ? this.type = "text" : this.type = "password";  
  }

  onSubmit() {
    if(this.loginForm.valid){
      //send the object to database
      console.log(this.loginForm.value);
      
    } else {
      console.log("Form is not valid");
      // throw the error using toaster
      ValidateForm.validateAllFormFields(this.loginForm); 
      alert("Your form is invalid")
    }
  }



}
