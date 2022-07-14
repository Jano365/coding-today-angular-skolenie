import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {
  filmId!: string;
  film: any;

  constructor(private activatedRoute: ActivatedRoute, private filmService: FilmService) {
    this.activatedRoute.params.subscribe(res => {
      const {filmId} = res;
      this.filmId = filmId;
    })
   }

  async ngOnInit() {
    this.filmService.getFilmById(this.filmId).subscribe(res => this.film = res)
  }

}
