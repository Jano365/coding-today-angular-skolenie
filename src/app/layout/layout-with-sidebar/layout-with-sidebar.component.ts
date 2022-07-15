import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUser } from 'src/app/shared/interfaces/auth-user.interface';

@Component({
  selector: 'app-layout-with-sidebar',
  templateUrl: './layout-with-sidebar.component.html',
  styleUrls: ['./layout-with-sidebar.component.css']
})
export class LayoutWithSidebarComponent implements OnInit {
  opened: boolean = true;
  user!: AuthUser | null;
  count!: number;

  constructor(private authService: AuthService, private store: Store<any>) { }

  ngOnInit(): void {
    this.authService.user$.subscribe(res => this.user = res)

    this.store.subscribe(res => {
      this.count = res?.counter?.count;
    })
  }

}
