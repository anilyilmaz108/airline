import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerRightsComponent } from './passenger-rights.component';

describe('PassengerRightsComponent', () => {
  let component: PassengerRightsComponent;
  let fixture: ComponentFixture<PassengerRightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerRightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerRightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
