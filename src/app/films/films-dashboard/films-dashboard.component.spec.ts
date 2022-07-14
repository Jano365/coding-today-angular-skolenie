import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsDashboardComponent } from './films-dashboard.component';

describe('FilmsDashboardComponent', () => {
  let component: FilmsDashboardComponent;
  let fixture: ComponentFixture<FilmsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
