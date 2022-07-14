import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveSignupFormComponent } from './reactive-signup-form/reactive-signup-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReactiveSignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    ReactiveSignupFormComponent
  ]
})
export class ReactiveSignupModule { }
