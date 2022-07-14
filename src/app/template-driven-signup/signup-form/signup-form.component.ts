import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interfaces/user.interface';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  user: User = {
    name: "",
    account: {
      email: "carl@gmail.com",
      confirm: "carl@gmail.com"
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit({value, valid}: {value: User, valid: boolean | null}) {
  //   console.log(value, valid)
    
    
  //   // console.log(f);
  //   // if(f.valid) {
  //   //   alert('Save....')
  //   //   return;
  //   // }

  //   // console.log('neco je spatne')
   
  // }


  onSubmit(f: NgForm) {
    console.log(f)
  }

}
