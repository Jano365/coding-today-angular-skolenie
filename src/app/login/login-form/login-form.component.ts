import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './auth.service';
import { Authenticate } from './authenticate.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  send: boolean = false;

  loginForm: Authenticate = {
    username: "Karel",
    password: "",
    myNumber: 0
  }

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  // POUZITI DESTRUKTORU 
  // {value, valid} : {value: any, valid: boolean}
  // ===
  // const value = f.value;
  // const valid = f.valid

  // async submitForm({ value, valid }: { value: any, valid: boolean | null }): Promise<void> {
    
  async submitForm(f: NgForm) {
    console.log(f)
    console.log('hodnoty:', f.value);
    console.log('validace:', f.valid);

    if (f.valid) {
      this.send = true;
      await this.callApi(f.value);
    } else {
      console.log('Error na formulari')
    }
  }

  private async callApi(value: Authenticate) {
    try {

      // odesilame username a password
      // vrati se nam token
      const responseToken = await lastValueFrom(this.authService.login(value))
      console.log('token', responseToken);

      // preroutovat uzivatele na users komponentu
      this.router.navigate(['/films'])

    } catch (error) {
      console.log('error:', error)
    }
  }

  // private async callApi(value: Authenticate) {
  //   try {


  //     // response = {
  //     //   status: true | false,
  //     //   message: "userAlreadyExists",
  //     //   description: "Uživatel již existuje"
  //     // }

  //     // STATUS 200
  //     const response = await lastValueFrom(this.authService.login({} as any))

  //     if(response?.status === true) {
  //       alert('Vsechno je OK');
  //       return;
  //     }

  //     if(response?.status === false) {
  //       alert(response.description)
  //     }

  //   } catch (error) {
  //     console.log('error:', error)
  //     // 500, 405, atd, atd
  //     // SPADNE UPLNE COKOLIV CO NEMA STATUS CODE 200

  //     alert('Něco se pokazilo. Prosim nactete stranku znova.')
  //   }
  // }


}