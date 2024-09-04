import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInDoneComponent } from './check-in-done.component';

describe('CheckInDoneComponent', () => {
  let component: CheckInDoneComponent;
  let fixture: ComponentFixture<CheckInDoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckInDoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckInDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
