import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsDashboardComponent } from './films-dashboard/films-dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { FilmsCardComponent } from './films-card/films-card.component';
import { IconizePipe } from './iconize.pipe';
import { MatIconModule } from '@angular/material/icon';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FilmsDashboardComponent,
    FilmsCardComponent,
    IconizePipe,
    FilmDetailComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    RouterModule
  ],
})
export class FilmsModule { }
