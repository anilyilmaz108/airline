import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightStepsComponent } from './flight-steps.component';

describe('FlightStepsComponent', () => {
  let component: FlightStepsComponent;
  let fixture: ComponentFixture<FlightStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightStepsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
