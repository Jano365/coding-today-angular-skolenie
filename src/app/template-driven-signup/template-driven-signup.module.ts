import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormsModule } from '@angular/forms';
import { PasswordDirective } from './password.directive';



@NgModule({
  declarations: [
    SignupFormComponent,
    PasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SignupFormComponent
  ]
})
export class TemplateDrivenSignupModule { }
