import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexReservationComponent } from './flex-reservation.component';

describe('FlexReservationComponent', () => {
  let component: FlexReservationComponent;
  let fixture: ComponentFixture<FlexReservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexReservationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
