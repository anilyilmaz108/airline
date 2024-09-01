import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedFlightsComponent } from './selected-flights.component';

describe('SelectedFlightsComponent', () => {
  let component: SelectedFlightsComponent;
  let fixture: ComponentFixture<SelectedFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedFlightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectedFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
