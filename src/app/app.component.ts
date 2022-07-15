import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-fundamentals-ii';

  constructor(private authService: AuthService, private router: Router) {

  }

  async ngOnInit() {
      const token = localStorage.getItem('token');
      console.log(token);
      if(!!token) {
        // resolve api
        await lastValueFrom(this.authService.resolve(token));
      }
  }
}
