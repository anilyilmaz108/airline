import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCheckInComponent } from './select-check-in.component';

describe('SelectCheckInComponent', () => {
  let component: SelectCheckInComponent;
  let fixture: ComponentFixture<SelectCheckInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectCheckInComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCheckInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
