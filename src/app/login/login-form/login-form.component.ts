import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Authenticate } from 'src/app/shared/interfaces/authenticate.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm: Authenticate = {
    username: "",
    password: ""
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  async login(f: NgForm) {
    console.log(f)
    if(f.valid) {
      await this.callApi(f.value);
      return;
    }
  }

  private async callApi(payload: Authenticate) : Promise<void> {
    try {
      await lastValueFrom(this.authService.login(payload));
    } catch (error) {
      console.log(error)
    }
  }

}
