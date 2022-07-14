import { Component, OnInit } from '@angular/core';
import { combineLatest, filter, lastValueFrom } from 'rxjs';
import { MockService } from 'src/app/mock.service';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films-dashboard',
  templateUrl: './films-dashboard.component.html',
  styleUrls: ['./films-dashboard.component.css']
})
export class FilmsDashboardComponent implements OnInit {
  films!: Array<any>;
  mockData1: any;
  mockData2: any;

  constructor(private filmService: FilmService, private mockService: MockService) { }

  async ngOnInit() {
    const response = await lastValueFrom(this.filmService.getFilms())
    this.films = response;

    // this.filmService.getFilms().pipe(filter(num => num % 2 === 0)).subscribe(res => {
    //   this.films = res
    // })

    // this.mockService.mock1().subscribe(res => this.mockData1 = res)

    // this.mockService.mock2().subscribe(res => this.mockData2 = res)


    // const combined$ = combineLatest([this.mockService.mock1(), this.mockService.mock2()]);
    // combined$.subscribe(res => {
    //   console.log(res)
    // })


  }

  async save() {
    try {
      const response = await lastValueFrom(this.filmService.saveFilm({
        "createdAt": 1657706911,
        "film": "film 1",
        "price": 81,
        "description": "description 1",
        "img": "img 1",
        "favorite": true,
        "id": "111111111"
      }))

      if(response.status === true) {
        alert('Ulozeno')
      } else {
        alert('Neco se nepovedlo')
      }
      console.log(response)

    } catch (error) {
      alert('Spadlo')
        console.log(error)
    }

  }

}
