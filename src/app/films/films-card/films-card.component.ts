import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-films-card',
  templateUrl: './films-card.component.html',
  styleUrls: ['./films-card.component.css']
})
export class FilmsCardComponent implements OnInit, OnChanges {
  @Input() filmName!: string; 


  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  ngOnChanges(simpleChanges: SimpleChanges)	{
    console.log(simpleChanges)
    console.log('ngOnChanges')
  }

}
