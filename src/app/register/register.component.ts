import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registration!:FormGroup;

  constructor(
    public fc:FormBuilder,
    public router:Router,
  ){
  }

  ngOnInit(){
    this.registration= this.fc.group({
      fullname: ['',[Validators.required]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      isAccepted: [false]
    }) 
  }

  Submit(){
    this.router.navigate(['/dashboard'])
  }

}
