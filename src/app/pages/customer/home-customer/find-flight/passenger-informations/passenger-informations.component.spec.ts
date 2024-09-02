import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengerInformationsComponent } from './passenger-informations.component';

describe('PassengerInformationsComponent', () => {
  let component: PassengerInformationsComponent;
  let fixture: ComponentFixture<PassengerInformationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassengerInformationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassengerInformationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
