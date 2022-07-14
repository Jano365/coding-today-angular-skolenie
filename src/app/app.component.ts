import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './login/login-form/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-fundamentals-ii';

  constructor(private authService: AuthService, private router: Router) {

  }

  async ngOnInit() {
    const token = localStorage.getItem('token');
    console.log('AppComponent', token)
    if (token) {
      await lastValueFrom(this.authService.resolve({ token: JSON.parse(token) }))
      this.router.navigate(['/films'])
    }
  }

}
