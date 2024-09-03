import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDoneComponent } from './flight-done.component';

describe('FlightDoneComponent', () => {
  let component: FlightDoneComponent;
  let fixture: ComponentFixture<FlightDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightDoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
