import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup-form',
  templateUrl: './reactive-signup-form.component.html',
  styleUrls: ['./reactive-signup-form.component.css']
})
export class ReactiveSignupFormComponent implements OnInit {
  user!: FormGroup;
  submitted: boolean = false;

  get name() {
    return this.user.get('name') as FormControl;
  }

  constructor() { }

  ngOnInit(): void {
    this.user = new FormGroup({
      name: new FormControl('',[Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required, ),
        confirm: new FormControl('', Validators.required)
      })
    })
  }

  onSubmit() {
    console.log(this.user);
    this.submitted = true;
    if(this.user.valid) {
      console.log(this.user.value)
      alert('Saved....')
    }
  }


}
