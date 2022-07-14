import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankViewComponent } from './blank-view.component';

describe('BlankViewComponent', () => {
  let component: BlankViewComponent;
  let fixture: ComponentFixture<BlankViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlankViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
