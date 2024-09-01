import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateScrollComponent } from './date-scroll.component';

describe('DateScrollComponent', () => {
  let component: DateScrollComponent;
  let fixture: ComponentFixture<DateScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateScrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
